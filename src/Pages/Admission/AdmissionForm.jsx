import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
const AdmissionForm = () => {
  const selectedCollege = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const userData = {
      photo: data.photoURL,
      subject: data.subject,
      phoneNumber: data.phoneNumber,
      college_name: data.college_name,
      address: data.address,
    };
    console.log(userData);
    fetch(`https://endgame-server-amber.vercel.app/users/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    fetch("https://endgame-server-amber.vercel.app/selectedColleges", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "College Applied successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
  };

  return (
    <div>
      <SectionTitle title="Admission Form"></SectionTitle>
      <div className="mx-10 md:mx-20 mb-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Student Name*</span>
              </label>
              <input
                type="text"
                value={user?.displayName}
                {...register("name", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">PhotoURL*</span>
              </label>
              <input
                type="text"
                placeholder="PhotoURL"
                {...register("photoURL", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="flex my-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-semibold">Subject*</span>
              </label>
              <input
                type="text"
                placeholder="Subject Name"
                {...register("subject", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text font-semibold">Student Email*</span>
              </label>
              <input
                type="email"
                value={user?.email}
                {...register("email", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="flex my-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-semibold">Phone Number*</span>
              </label>
              <input
                type="text"
                placeholder="Phone number"
                {...register("phoneNumber", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text font-semibold">Date of Birth*</span>
              </label>
              <input
                type="date"
                {...register("birth", { required: true })}
                placeholder="Date of birth"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Address</span>
            </label>
            <input
              type="text"
              placeholder="Address"
              {...register("address", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full mb-4 hidden">
            <label className="label">
              <span className="label-text font-semibold">College name</span>
            </label>
            <input
              type="text"
              value={selectedCollege.college_name}
              {...register("college_name", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          <input
            className="btn bg-orange-500 btn-block mt-4"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
