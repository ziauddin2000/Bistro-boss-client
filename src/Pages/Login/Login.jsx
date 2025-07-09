import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";

export default function Login() {
  let { signInUser, googleSignIn } = useContext(AuthContext);
  let AxiosPublic = useAxiosPublic();

  let location = useLocation();
  let navigate = useNavigate();

  let redirectTo = location.state ? location.state : "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  //   Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;

    if (validateCaptcha(captcha) === true) {
      signInUser(email, password)
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login successful",
          }).then(() => {
            navigate(redirectTo);
          });
        })
        .catch(() => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Invalid credentials!",
          });
        });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Captcha is invalid. Please try again.",
      });
    }
  };

  // Handle Google Sign In
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        // add use to mongoDB
        let userInfo = {
          name: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };

        AxiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Login successful",
            }).then(() => {
              navigate(redirectTo);
            });
          } else if (res.data.insertedId === null) {
            navigate(redirectTo);
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Something went wrong! User login failed!",
            });
          }
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message,
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="py-6 md:py-8 px-2 max-w-screen-xl mx-auto">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center text-2xl font-semibold mb-4">Login</h2>
            <div className="mb-3">
              <label className="label block">Email</label>
              <input
                type="email"
                className="input w-full"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label className="label block">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <label className="label block">Captcha</label>
              <div className="px-2 py-2 my-2 bg-gray-100 rounded-md">
                <LoadCanvasTemplate />
              </div>
              <input
                type="text"
                className="input w-full"
                name="captcha"
                placeholder="Enter the Captcha above"
              />
            </div>
            <button className="btn btn-neutral mt-4">Login</button>

            <div className="mt-4 text-center">
              <p>
                New to here?{" "}
                <Link className="text-blue-500 underline" to="/signup">
                  Create a acccount
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-5 text-center">
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
