import React from "react";
import { signInWithGoogle } from "../../firebase.config";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body text-center space-y-14 border border-primary">
          <h2 className="text-2xl font-bold text-primary">Login</h2>
          <form action="" className="space-y-6">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs  "
            />
            <input
              type="submit"
              placeholder="Login"
              className="input input-bordered w-full max-w-xs cursor-pointer bg-primary font-bold"
            />
          </form>
          <div className="divider">OR</div>
          <button className="btn btn-outline" onClick={signInWithGoogle}>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
