import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const userType = watch("userType");
  const vehicleType = watch("vehicleType");
  const nid = watch("nid");
  console.log(nid);
  const onSubmit = (data) => {
    axios
      .post(`http://localhost:5000/api/user/register`, data)
      .then((response) => {
        console.log(response);
      });
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
          <h1 className="text-3xl font-bold text-center mb-6">
            Register your account
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* User Type */}
            <label className="text-sm font-medium text-gray-900 block mb-0">
              I'm a
            </label>
            <select
              id="userType"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              {...register("userType", {
                required: "Select an option",
              })}
            >
              <option value=""></option>
              <option value="Learner">Learner</option>
              <option value="Rider">Rider</option>
            </select>
            {errors.userType && (
              <span className="text-red-600 py-3 px-4">
                {errors.userType.message}
              </span>
            )}
            {/* ============ First Name  ============ */}
            <div className="flex gap-6">
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Enter Your First Name
                </label>
                <input
                  type="text"
                  placeholder="Jhon"
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                  {...register("firstName", { required: true, maxLength: 10 })}
                />
                {errors.firstName?.type === "required" && (
                  <span className="text-red-600 py-3 px-4">
                    Name is required
                  </span>
                )}
              </div>
              {/* ============ Last Name  ============ */}
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Enter Your last Name
                </label>
                <input
                  type="text"
                  placeholder="Smith"
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                  {...register("lastName", { required: true, maxLength: 10 })}
                />
                {errors.lastName?.type === "required" && (
                  <span className="text-red-600 py-3 px-4">
                    Name is required
                  </span>
                )}
              </div>
            </div>
            {/* ============ Email  ============ */}
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
            {/* ============ age ============ */}
            <label className="text-sm font-medium text-gray-900 block mb-0">
              Enter your age
            </label>
            <input
              type="number"
              placeholder="30"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              {...register("age", {
                required: true,
              })}
            />
            {errors.age?.type === "required" && (
              <span className="text-red-600 py-3 px-4">Age is required</span>
            )}
            {/* ============ Phone Number  ============ */}
            <label className="text-sm font-medium text-gray-900 block mb-0">
              Enter your Phone Number
            </label>
            <span className="block text-sm py-3 px-4 rounded-lg w-full border outline-none">
              +880
              <input
                type="text"
                className="outline-none"
                placeholder="102950965"
                {...register("phoneNumber", {
                  required: true,
                  maxLength: 10,
                })}
              />
            </span>
            {errors.phoneNumber?.type === "required" && (
              <span className="text-red-600 py-3 px-4">
                Phone Number is required
              </span>
            )}
            {/* ============ Password  ============ */}
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
            {/* ============ Confirm Password  ============ */}
            <label className="text-sm font-medium text-gray-900 block mb-0">
              Confirm your password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              {...register("confirmPassword", {
                required: true,
                minLength: 6,
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-600 py-3 px-4">
                {errors.confirmPassword.message}
              </span>
            )}
            {/* ============ Area  ============ */}
            {userType === "Rider" && (
              <div className="flex flex-col">
                <select
                  id="area"
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                  {...register("area", {
                    required: "Select Your Area",
                  })}
                >
                  <option value="">Select Area</option>
                  <option value="mugda">Mugda</option>
                  <option value="motijheel">Motijheel</option>
                  <option value="malibag">Malibag</option>
                </select>
                {errors.area && (
                  <span className="text-red-600 py-3 px-4">
                    {errors.area.message}
                  </span>
                )}
              </div>
            )}
            {/* ============ Address  ============ */}
            <label className="text-sm font-medium text-gray-900 block mb-0">
              Enter Your Address
            </label>
            <textarea
              id="address"
              placeholder="Address"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              {...register("address", {
                required: true,
              })}
            />
            {errors.address?.type === "required" && (
              <span className="text-red-600 py-3 px-4">
                Address is required
              </span>
            )}
            <div className="flex gap-2">
              {/* ============ VehicleType & Fee  ============ */}
              <div className="flex flex-col">
                <select
                  id="vehicleType"
                  className={`block text-sm py-3 px-4 rounded-lg  border outline-none ${
                    userType === "Learner" ? `w-full px-1` : "px-4"
                  }`}
                  {...register("vehicleType", {
                    required: "Select one option",
                  })}
                >
                  <option value="">Vehicle Type</option>
                  <option value="Car">Car</option>
                  <option value="Bike">Bike</option>
                </select>
                {errors.vehicleType && (
                  <span className="text-red-600 py-3 px-4">
                    {errors.vehicleType.message}
                  </span>
                )}
              </div>
              {/* ============ Vehicle License Number  ============*/}
              {userType === "Rider" && (
                <React.Fragment>
                  <div>
                    <input
                      id="vehicleLicenseNumber"
                      className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                      type="text"
                      placeholder="Vehicle License number"
                      {...register("vehicleLicense", {
                        required: true,
                      })}
                    />

                    {errors.vehicleLicense?.type === "required" && (
                      <span className="text-red-600 py-3 px-4">
                        License Number is required
                      </span>
                    )}
                  </div>
                  {/*============ Car information  ============ */}
                  <div>
                    <input
                      id="VehicleInfo"
                      className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                      type="text"
                      placeholder="Vehicle Information"
                      {...register("vehicleInfo", {
                        required: true,
                      })}
                    />
                    {errors.vehicleInfo?.type === "required" && (
                      <span className="text-red-600 py-3 px-4">
                        Vehicle Information is required
                      </span>
                    )}
                  </div>
                </React.Fragment>
              )}
            </div>

            {/* ============ Driving License  ============ */}
            {userType === "Rider" && (
              <React.Fragment>
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Upload your Driving License
                </label>
                <input
                  id="drivingLicense"
                  className="block w-full cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-transparent text-sm rounded-lg"
                  type="file"
                  {...register("drivingLicense", {
                    required: true,
                    validate: {
                      lessThan2MB: (files) =>
                        files[0]?.size < 2000000 || "Image max 2MB",
                      acceptedFormats: (files) =>
                        ["image/jpeg", "image/jpg", "image/png"].includes(
                          files[0]?.type
                        ) || "Only PNG, JPEG e GIF",
                    },
                  })}
                />
                {errors.drivingLicense?.type === "required" && (
                  <span className="text-red-600 py-3 px-4">
                    Driving License required
                  </span>
                )}
                {errors.drivingLicense?.type === "acceptedFormats" && (
                  <span className="text-red-600 py-3 px-4">
                    Must be an Image type (jpeg & png)
                  </span>
                )}
                {errors.drivingLicense?.type === "lessThan2MB" && (
                  <span className="text-red-600 py-3 px-4">
                    File size cannot exceeds more than 2 MB
                  </span>
                )}
              </React.Fragment>
            )}
            {/* ============ NID Picture  ============ */}
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Upload your NID
            </label>
            <input
              id="nid"
              className="block w-full cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-transparent text-sm rounded-lg"
              type="file"
              {...register("nid", {
                required: true,
                validate: {
                  lessThan2MB: (files) =>
                    files[0]?.size < 2000000 || "Image max 2MB",
                  acceptedFormats: (files) =>
                    ["image/jpeg", "image/jpg", "image/png"].includes(
                      files[0]?.type
                    ) || "Only PNG, JPEG e GIF",
                },
              })}
            />
            {errors.nid?.type === "required" && (
              <span className="text-red-600 py-3 px-4">NID required</span>
            )}
            {errors.nid?.type === "acceptedFormats" && (
              <span className="text-red-600 py-3 px-4">
                Must be an Image type (jpeg & png)
              </span>
            )}
            {errors.nid?.type === "lessThan2MB" && (
              <span className="text-red-600 py-3 px-4">
                File size cannot exceeds more than 2 MB
              </span>
            )}
            {/* ============ Profile Picture  ============ */}
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Upload your Profile Picture
            </label>
            <input
              id="profilePicture"
              className="block w-full cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-transparent text-sm rounded-lg"
              type="file"
              {...register("profilePicture", {
                required: true,
                validate: {
                  lessThan2MB: (files) =>
                    files[0]?.size < 2000000 || "Image max 2MB",
                  acceptedFormats: (files) =>
                    ["image/jpeg", "image/jpg", "image/png"].includes(
                      files[0]?.type
                    ) || "Only PNG, JPEG e GIF",
                },
              })}
            />
            {errors.profilePicture?.type === "required" && (
              <span className="text-red-600 py-3 px-4">
                Profile Picture required
              </span>
            )}
            {errors.profilePicture?.type === "acceptedFormats" && (
              <span className="text-red-600 py-3 px-4">
                Must be an Image type (jpeg & png)
              </span>
            )}
            {errors.profilePicture?.type === "lessThan2MB" && (
              <span className="text-red-600 py-3 px-4">
                File size cannot exceeds more than 2 MB
              </span>
            )}
          </div>
          <div className="mt-6">
            {userType === "Learner" && (
              <div className="flex gap-2">
                <div className="block text-sm py-3 px-4 rounded-lg w-full border outline-none">
                  Total Fee: &nbsp;
                  {vehicleType === "Car"
                    ? "$200"
                    : vehicleType === "Bike"
                    ? "$100"
                    : ""}
                </div>
                <button
                  type="submit"
                  className="py-2 w-60 text-xl text-white bg-green-400 rounded-2xl"
                >
                  Pay Now
                </button>
              </div>
            )}
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl"
            >
              Signup
            </button>
            <p className="mt-4 text-base ">
              Already Have An Account? &nbsp;
              <Link to="/login">
                <span className="underline cursor-pointer">Sign in</span>
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

export default RegistrationForm;
