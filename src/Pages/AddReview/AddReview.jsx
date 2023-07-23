import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
  const navaigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Review Send successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navaigate("/myCollege");
        }
      });
  };
  return (
    <div>
      <SectionTitle title="Add a Review"></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              {...register("name", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Title</span>
            </label>
            <input
              type="text"
              name="title"
              value={"Student"}
              {...register("title", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Your Review</span>
          </label>
          <input
            type="text"
            placeholder="Add Review"
            {...register("quote", { required: true })}
            className="input input-bordered w-full h-28 "
          />
        </div>
        <input
          type="submit"
          className="btn btn-success my-6 w-full"
          value="Send"
        />
      </form>
    </div>
  );
};

export default AddReview;
