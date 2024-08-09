import SignupImage from "../assets/images/signup.gif";
import AvaarImage from "../assets/images/doctor-img02.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import uploadCloudImageToCloudinary from "../utils/uploadCloudinary";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners/HashLoader";

function Signup() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient", // Fixed typo here
  });

  const navigate = useNavigate();

  // function for the onChange
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0]; // Fixed file selection
    const data = await uploadCloudImageToCloudinary(file);

    setPreviewURL(data.url); // Fixed typo here
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* signup image section start  */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={SignupImage} alt="" className="w-full rounded-lg" />
            </figure>
          </div>
          {/* signup image section start  */}
          {/* form section start  */}
          <div className="rounded-l-lg lg:pl-16 py--10">
            <h3 className="text-headingColor font-bold text-[22px] leading-9 mb-10">
              Create an <span className="text-primaryColor">Account</span>
            </h3>
            <form onSubmit={submitHandler}>
              {/* Full name section start  */}
              <div className="mb-5">
                <input
                  type="text" // Corrected input type here
                  placeholder="Enter Your Full Name "
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full  py-3 pr-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor md:rounded-r-md cursor:pointer"
                  required
                />
              </div>
              {/* Full name section end  */}
              {/* email section start  */}
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full  py-3 pr-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor md:rounded-r-md cursor:pointer"
                  required
                />
              </div>
              {/* email section end  */}
              {/* password section start  */}
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password "
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full  py-3 pr-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor md:rounded-r-md cursor:pointer"
                  required
                />
              </div>
              {/* password section end  */}

              <div className="flex justify-between mb-5  items-center">
                {/* start  */}
                <label className="leading-7 font-bold text-headingColor text-[16px]">
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="leading-7 text-textColor font-semibold text-[15px] px-4 py-3 focus:outline-none"
                  >
                    <option value="patient">Patient</option> {/* Fixed typo here */}
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                {/* end */}
                {/* start  */}
                <label className="leading-7 font-bold text-headingColor text-[16px]">
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="leading-7 text-textColor font-semibold text-[15px] px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>
                {/* end */}
              </div>

              <div className="flex items-center gap-3 mb-5">
                {selectedFile && (
                  <figure className="rounded-full w-[60px] h-[60px] border-2 border-solid border-primaryColor justify-center flex items-center">
                    <img
                      src={previewURL} // Fixed typo here
                      alt=""
                      className="w-full rounded-full"
                    />
                  </figure>
                )}

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                  disabled={loading && true}
                  type="submit"
                  className="w-full bg-primaryColor text-white leading-[30px] rounded-lg text-[18px] px-4 py-3"
                >
                  {loading ? <HashLoader size={35} color="#fff" /> : "Sign Up"}
                </button>
              </div>
              <p className="mt-5 text-center text-textColor">
                Already have an account?{" "}
                <Link to="/login" className="text-primaryColor ml-1 font-medium">
                  LogIn
                </Link>
              </p>
            </form>
          </div>
          {/* form section end */}
        </div>
      </div>
    </section>
  );
}

export default Signup;
