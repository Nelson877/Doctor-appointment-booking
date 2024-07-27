import { useState } from "react";
import ImageDocor from "../../assets/images/doctor-img02.png";
import StarIcon from "../../assets/images/Star.png";
import About from "../../components/DoctorAbout/About";
import Feedback from "../../components/DoctorAbout/Feedback";
import SidePanel from "./SidePanel";

function DoctorDetails() {
  const [tab, setTab] = useState("about");

  return (
    <section>
      <div className='mx-auto px-5 max-w-[1170px]'>
        <div className='grid md:grid-cols-3 gap-[50px]'>
          {/* secttion one start  */}
          <div className='md:col-span-2'>
            <div className='flex items-center gap-5'>
              <figure className='max-w-[200px]  max-h-[200px]'>
                <img src={ImageDocor} alt='' className='w-full' />
              </figure>
              <div>
                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px]  lg:leading-7 font-semibold rounded'>
                  Surgeon
                </span>
                <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>
                  Dr.Dzikunu Nelson
                </h3>
                <div className='flex items-center gap-[6px]'>
                  <span className='flex items-center ga-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                    <img src={StarIcon} alt='' /> 4.8
                  </span>
                  <span className='ext-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
                    (272)
                  </span>
                </div>
                {/* <p className='text_para text-[14px] md:text-[15px] leading-6 lg:max-w-[390px]'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p> */}
              </div>
            </div>

            {/* nav section start  */}
            <div className='mt-[50px] border-b border-solid border-borderaColor'>
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-b border-soild border-primaryColor"
                } py-2 leading-7 px-5 mr-5 text-[16px] text-headingColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" &&
                  "border-b border-soild border-primaryColor"
                } py-2 leading-7 px-5 mr-5 text-[16px] text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>
            {/* nav section end  */}
            {/* doctor section start  */}
            <div className='mt-[50px]'>
              {tab === "about" && <About />}
              {tab === "feedback" && <Feedback />}
            </div>
            {/* doctor section start  */}
          </div>
          {/* secttion one end  */}

          {/* secttion two start  */}
          <div>
            <SidePanel/>
          </div>
          {/* secttion two end  */}
        </div>
      </div>
    </section>
  );
}

export default DoctorDetails;
