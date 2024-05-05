import UserImage from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/doctor",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo section  start */}
          <div>
            <h2>Doctor-Booking</h2>
            {/* <img src="" alt="" /> */}
          </div>
          {/* Logo section  end */}

          {/* menu section start  */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* menu section end  */}

          {/* Navbar right  start */}

          <div className="flex items-center gap-4">
            <div>
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full ">
                  <img
                    src={UserImage}
                    alt="user image"
                    className="w-full rounded-full"
                  />
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button className="bg-purpleColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>
          </div>
          {/* Navbar right  end */}
        </div>
      </div>
    </header>
  );
};

export default Header;
