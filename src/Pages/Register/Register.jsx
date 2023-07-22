import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { useContext, useState } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
const Register = () => {
  const [err, setErr] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    if (data.password !== data.conform) {
      setErr("Password Not Matched");
      return;
    }

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User created successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
      updateUserProfile(data.name).catch((error) => setErr(error.message));
      navigate("/login");
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="md:w-1/2 max-w-sm ">
          <h1 className="text-5xl font-bold text-center my-4">
            Please Register
          </h1>
          <p className="text-red-600">{err}</p>
          <div className="rounded-xl bg-slate-50">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="input"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-600">Name is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600">Email is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                <p className="text-red-600">{err}</p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Conform Password</span>
                </label>
                <input
                  type="password"
                  name="conform"
                  placeholder="Conform Password"
                  {...register("conform", { required: true })}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <p className="text-center mb-4">
              <small>
                Already have an account ?
                <Link to="/login">
                  <span className="text-blue-600"> Login</span>
                </Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
        <div className="text-center md:w-1/2 lg:text-left">
          <img
            className="rounded"
            src="https://quicklaunch.io/wp-content/uploads/2019/10/user-registration.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
