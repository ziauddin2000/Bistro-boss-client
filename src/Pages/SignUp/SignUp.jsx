import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

export default function SignUp() {
  let { createUser, updateProfileUser } = useContext(AuthContext);

  // Handle form submission
  let handleSubmit = (event) => {
    event.preventDefault();
    let form = event.target;
    let name = form.name.value;
    let photoURL = form.photoURL.value;
    let email = form.email.value;
    let password = form.password.value;

    createUser(email, password)
      .then((result) => {
        if (result.user) {
          updateProfileUser(name, photoURL)
            .then(() => {
              form.reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User created successfully",
              });
            })
            .catch(() => {
              Swal.fire({
                position: "center",
                icon: "error",
                title: "Failed to update profile!",
              });
            });
        }
      })
      .catch(() => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "User created failed!",
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto py-6 md:py-8 px-2">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center text-2xl font-semibold mb-4">Sign Up</h2>
            <div className="mb-3">
              <label className="label block">Name</label>
              <input
                type="text"
                className="input w-full"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="label block">Phot URL</label>
              <input
                type="text"
                className="input w-full"
                name="photoURL"
                placeholder="Phot URL"
                required
              />
            </div>
            <div className="mb-3">
              <label className="label block">Email</label>
              <input
                type="email"
                className="input w-full"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="label block">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Password"
                required
              />
            </div>
            <button className="btn btn-neutral mt-4">Sign Up</button>
            <div className="mt-4 text-center">
              <p>
                Already have an account?{" "}
                <Link className="text-blue-500 underline" to="/login">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
