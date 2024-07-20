import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";

const socialLinks = [
  {
    path: "/",
    icon: <AiOutlineInstagram className='w-5 h-5 group-hover-text-white' />,
  },
  {
    path: "/",
    icon: <AiOutlineFacebook className='w-5 h-5 group-hover-text-white' />,
  },
  {
    path: "/",
    icon: <AiOutlineLinkedin className='w-5 h-5 group-hover-text-white' />,
  },
];

const quickLink01 = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/doctor",
    display: "Find Doctor",
  },
  {
    path: "/our-services",
    display: "Services",
  },
  {
    path: "/contact-us",
    display: "Conntact",
  },
];

const quickLink02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/find-a-doctor",
    display: "Request an Appointment",
  },
  {
    path: "/find-a-location",
    display: "Find a Location",
  },
  {
    path: "/get-a-opinion",
    display: "Get a Opinion",
  },
];

const quickLink03 = [
  {
    path: "/contact-us",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-[30px]'>
          <div>
            {/* Logo section  start */}
            <div>
              <h2 className='font-[200] text-xl'>
                <span className='text-lg font-[600]'>THE</span> <br /> DOCTOR
              </h2>
              {/* <img src="" alt="" /> */}
            </div>
            {/* Logo section  end */}

            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className='w-9 h-9  border border-soild border-[#181A1E] rounded-full items-center flex justify-center group hover:bg-primaryColor hover:border-none hover:text-white'
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          {/* quick links section start  */}
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Quick Links
            </h2>
            <ul>
              {quickLink01.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link
                    to={item.path}
                    className='text-[16px] leading-7 font-[400] text-textColor'
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* quick links section end  */}

          {/* i want to section start  */}

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              I want to:
            </h2>
            <ul>
              {quickLink01.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link
                    to={item.path}
                    className='text-[16px] leading-7 font-[400] text-textColor'
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* i want to section end  */}

          {/* support section start  */}
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Support
            </h2>
            <ul>
              {quickLink01.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link
                    to={item.path}
                    className='text-[16px] leading-7 font-[400] text-textColor'
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* support section end  */}
        </div>
        <div>
          {" "}
          <p className='text-[16px] leading-7 fon-[400] text-textColor mt-4'>
            Copyright {year} Powered by DzikDev all right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
