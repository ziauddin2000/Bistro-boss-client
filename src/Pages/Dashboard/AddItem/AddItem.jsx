import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

export default function AddItem() {
  let AxiosPublic = useAxiosPublic();
  let AxiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const imageUploadApi = import.meta.env.VITE_image_upload_api;

  const onSubmit = async (data) => {
    let imageFile = { image: data.image[0] };
    let res = await AxiosPublic.post(
      `https://api.imgbb.com/1/upload?key=${imageUploadApi}`,
      imageFile,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    let menuItem = {
      name: data.name,
      recipe: data.recipe,
      image: res.data.display_url,
      category: data.category,
      price: parseFloat(data.price),
    };

    let res2 = await AxiosSecure.post(`/menu`, menuItem);
    if (res2.data.insertedId) {
      reset();
      Swal.fire({
        title: "Success",
        text: "Item added successfully",
        icon: "success",
      });
    }
  };

  return (
    <div className="p-5">
      <h2 className="font-semibold text-center text-4xl mb-5">Add Items</h2>

      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <div className="mb-3">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required!" })}
              placeholder="Type here"
              className="input w-full"
            />
            {errors.name && (
              <p className="text-red-500 my-1">{errors.name.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {/* category */}
            <div className="mb-3">
              <label className="block mb-2">Category</label>
              <select
                className="select w-full"
                {...register("category", { required: "Category is required!" })}
              >
                <option value="" selected>
                  Select
                </option>
                <option>Salad</option>
                <option>Pizza</option>
                <option>Soup</option>
                <option>Desserts</option>
                <option>Drinks</option>
              </select>
              {errors.category && (
                <p className="text-red-500 my-1">{errors.category.message}</p>
              )}
            </div>
            {/* price */}
            <div className="mb-3">
              <label className="block mb-2">Price</label>
              <input
                type="text"
                placeholder="Type here"
                className="input w-full"
                {...register("price", { required: "Price is required" })}
              />
              {errors.price && (
                <p className="text-red-500 my-1">{errors.price.message}</p>
              )}
            </div>
          </div>

          {/* recipe */}
          <div className="mb-3">
            <label className="block mb-2">Recipe</label>
            <textarea
              className="textarea w-full"
              placeholder="Recipe"
              {...register("recipe", { required: "Recipe is required" })}
            ></textarea>
            {errors.recipe && (
              <p className="text-red-500 my-1">{errors.recipe.message}</p>
            )}
          </div>

          {/* Image */}
          <div className="mb-3">
            <label className="block mb-2">Image</label>
            <input
              type="file"
              className="file-input  w-full"
              {...register("image", { required: "Image is required" })}
            />
            {errors.image && (
              <p className="text-red-500 my-1">{errors.image.message}</p>
            )}
          </div>

          <button className="btn btn-neutral">Submit</button>
        </form>
      </div>
    </div>
  );
}
