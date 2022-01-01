import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";


const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
    console.log(e.target.email)
//     const auth = getAuth();
// createUserWithEmailAndPassword(auth, e.target, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

  };
  return (
    <div className="min-h-screen bg-yellow-700 flex justify-center items-center">
      <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
      <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
        <Link
          to="/"
          className="flex items-center justify-center cursor-pointer mb-3"
        >
          <img src={logo} alt="logo" className="object-contain w-10" />
          <span className="ml-2 text-base lg:text-2xl font-display font-bold tracking-wide leading-snug text-gray-800 uppercase">
            Hero <span className="text-purple-300"> Rider</span>
          </span>
        </Link>

        <div>
          <h1 className="text-3xl font-bold text-center mb-4">Welcome Back</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <label className="text-sm font-medium text-gray-900 block mb-0">
              Enter Your Email
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email?.type === "required" && (
              <span className="text-red-600 py-3 px-4">Email is required</span>
            )}
            <label className="text-sm font-medium text-gray-900 block mb-0">
              Enter Your Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password?.type === "required" && (
              <span className="text-red-600 py-3 px-4">
                Password is required
              </span>
            )}
            {errors.password?.message && (
              <span className="text-red-600 py-3 px-4">
                {errors.password?.message}
              </span>
            )}
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl"
            >
              Login
            </button>
            <p className="mt-4 text-base ">
              Don't Have An Account? &nbsp;
              <Link to="/registration">
                {" "}
                <span className="underline cursor-pointer">Sign up</span>{" "}
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
      <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
    </div>
  );
};

export default LoginForm;
