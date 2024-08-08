import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // function for the on Change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className='px-5 lg:px-0 mt-5 lg:mt-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg md:shadow-md md:p-10'>
        <h3 className='md:text-[22px] text-3xl text-headingColor font-bold mb-10 leading-9 '>
          Hello! <span className='text-primaryColor'>Welcome</span> Back
        </h3>
        <form action='' className='py-4 md:py-0'>
          {/* email section start  */}
          <div className='mb-5'>
            <input
              type='email'
              placeholder='Enter Your Email '
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor md:rounded-md cursor:pointer'
              required
            />
          </div>
          {/* email section end  */}
          {/* password section start  */}
          <div className='mb-5'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor md:rounded-md cursor:pointer'
              required
            />
          </div>
          {/* password section end  */}
          <div className='mt-7'>
            <button
              type='submit'
              className='w-full bg-primaryColor text-white leading-[30px] rounded-lg text-[18px] px-4 py-3'
            >
              LogIn
            </button>
          </div>
          <p className='mt-5 text-center text-textColor'>
            Don&apos;t have an account?{" "}
            <Link to='/signup' className='text-primaryColor ml-1 font-medium'>
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
