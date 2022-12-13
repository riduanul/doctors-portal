import React, { useState } from "react";
import { signInWithGoogle } from "../../firebase.config";
import googleIcon from "../../../assets/icons/google.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setLoading(false);
      navigate("/");
    } catch (error) {
      setError(error);
      console.log(error.message);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body text-center space-y-8 border border-primary px-20">
          <h2 className="text-2xl font-bold text-primary">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: { value: true, message: "email is required!" },
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Enter Valid Email ex: something@something.com",
                  },
                })}
              />
              <label className="label">
                <span className="label-text-alt">
                  {errors.email?.type === "required" && (
                    <p role="alert" className="text-red-500">
                      {errors.email?.message}
                    </p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p role="alert" className="text-red-500">
                      {errors.email?.message}
                    </p>
                  )}
                </span>
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: { value: true, message: "password is required!" },
                  minLength: {
                    value: 6,
                    message: "must be 6 characters  or long",
                  },
                })}
              />
              <label className="label">
                <span className="label-text-alt">
                  {errors.password?.type === "required" && (
                    <p role="alert" className="text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p role="alert" className="text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </span>
              </label>
            </div>

            <input
              className="btn btn-outline border border-primary  w-full max-w-xs hover:bg-primary hover:border-none"
              type="submit"
              value="Login"
            />
            <div className=" mt-2">
              <span className="text-red-500 mr-2"> New ? </span>
              <Link to="/register" className="text-green-500 font-bold">
                Register
              </Link>
            </div>
            {error && (
              <p className="text-red-500 text-center">{error.message}</p>
            )}
          </form>
          <div className="divider">OR</div>
          <button
            className="btn btn-outline hover:border-none hover:bg-primary border-primary "
            onClick={signInWithGoogle}
          >
            <span className="mr-2 ">
              <img src={googleIcon} alt="" width={25} />
            </span>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
