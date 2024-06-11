import Icon from "../../assets/images/icon01.png";
import Icon2 from "../../assets/images/icon02.png";
import Icon3 from "../../assets/images/icon03.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Icons = () => {
  return (
    <section>
      <div className="container">
        {/* start  */}
        <div className="lg:w-[470px] mx-auto">
          <h2 className="heading text-center">
            Providing the best medical services
          </h2>
          <p className="text__para text-center">
            Exceptional healthcare for all. Our health system provides
            unparalleled expertise in healthcare.
          </p>
        </div>
        {/* end 🎇 */}
        {/* new section start  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {/* icons section start  */}
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={Icon} alt="" />
            </div>
            <div className="mt-[30px">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Find a Doctor
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Finding a doctor is important because they help monitor your
                health, detect illness early, provide preventive care, offer
                personalized health advice, and ensure you have access to
                medical guidance and emergency care.
              </p>

              <Link
                to="/doctor"
                className="w-[44px] h-[44px] rounded-full border border-solid  border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:bg-primaryColor hover:border-none hover:text-white"
              >
                <FaArrowRight />
              </Link>
            </div>
          </div>
          {/* icons section end  */}
          {/* icons 2 section start  */}
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={Icon2} alt="" />
            </div>
            <div className="mt-[30px">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Find a Location
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                You can typically book a doctor's appointment at a doctor's
                office, urgent care center, hospital, or through telehealth
                (virtual visit), depending on your needs and preferences.
              </p>

              <Link
                to="/contact"
                className="w-[44px] h-[44px] rounded-full border border-solid  border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:bg-primaryColor hover:border-none hover:text-white"
              >
                <FaArrowRight />
              </Link>
            </div>
          </div>
          {/* icons 2 section end  */}
          {/* icons3 section start  */}
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={Icon3} alt="" />
            </div>
            <div className="mt-[30px">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Book Appointment
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Booking an appointment with a doctor is important because it
                helps you monitor your health, detect issues early, receive
                preventive care, manage chronic conditions, get personalized
                advice, and prepare for emergencies.
              </p>

              <Link
                to="/doctor"
                className="w-[44px] h-[44px] rounded-full border border-solid  border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:bg-primaryColor hover:border-none hover:text-white"
              >
                <FaArrowRight />
              </Link>
            </div>
          </div>
          {/* icons3 section end  */}
        </div>
        {/* new section end  */}
      </div>
    </section>
  );
};

export default Icons;
