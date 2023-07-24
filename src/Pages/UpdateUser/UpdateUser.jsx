import { useNavigate, useParams } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const UpdateUser = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  const { user } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserDetails(data));
  }, [user?.email]);
  const onSubmit = (data) => {
    const updateData = {
      name: data.name,

      subject: data.subject,
      phoneNumber: data.phoneNumber,
      address: data.address,
    };
    console.log(updateData);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Update Info successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/userDetails");
        }
      });
  };
  return (
    <div>
      <SectionTitle title="Update Info"></SectionTitle>
      <div className="mx-10 md:mx-20 mb-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Student Name</span>
              </label>
              <input
                type="text"
                defaultValue={userDetails?.name}
                {...register("name", { required: false })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Student ID</span>
              </label>
              <input
                type="text"
                value={userDetails?._id}
                {...register("photoURL", { required: false })}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="flex my-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                value={userDetails?.email}
                {...register("email", { required: false })}
                className="input input-bordered w-full"
              />
            </div>
            {userDetails?.subject ? (
              <div className="form-control w-full ml-4">
                <label className="label">
                  <span className="label-text font-semibold">Subject</span>
                </label>
                <input
                  type="text"
                  defaultValue={userDetails?.subject}
                  {...register("subject", { required: false })}
                  className="input input-bordered w-full "
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex my-4">
            {userDetails?.college_name ? (
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-semibold">College Name</span>
                </label>
                <input
                  type="text"
                  value={userDetails?.college_name}
                  {...register("college_name", { required: false })}
                  className="input input-bordered w-full"
                />
              </div>
            ) : (
              ""
            )}
            {userDetails?.phoneNumber ? (
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Phone Number</span>
                </label>
                <input
                  type="text"
                  defaultValue={userDetails?.phoneNumber}
                  {...register("phoneNumber", { required: false })}
                  className="input input-bordered w-full "
                />
              </div>
            ) : (
              ""
            )}
          </div>
          {userDetails?.address ? (
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-semibold">Address</span>
              </label>
              <input
                type="text"
                defaultValue={userDetails?.address}
                {...register("address", { required: false })}
                className="input input-bordered w-full "
              />
            </div>
          ) : (
            ""
          )}
          <input
            className="btn bg-orange-500 btn-block mt-4"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
