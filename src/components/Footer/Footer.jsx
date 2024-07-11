import { Link } from "react-router-dom"
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai"
import { RiLinkedinFill } from "react-icons/ri"



const socialLinks=[
  {
    path:'',
    icon:<AiOutlineInstagram className="w-5 h-5 group-hover-text-white"/>,
  },
  {
    path:'',
    icon:<AiOutlineFacebook className="w-5 h-5 group-hover-text-white"/>,
  },
  {
    path:'',
    icon:<AiOutlineLinkedin className="w-5 h-5 group-hover-text-white"/>,
  },
]


const quickLink01 = [
  {
    path:'/home',
    display:'Home',

  },
  {
    path:'/home',
    display:'About Us',

  },
  {
    path:'/home',
    display:'Blog',

  },
]


const quickLink02 = [
{
  path:'/find-a-doctor',
  display:'Find a Doctor'
},
{
  path:'/find-a-doctor',
  display:'Request an Appointment'
},
{
  path:'/find-a-location',
  display:'Find a Location'
},
{
  path:'/get-a-opinion',
  display:'Get a Opinion'
},
]

const quickLink03 = [
  {
    path:'/contact-us',
    display:'Contact Us'
  },

  ]


const Footer =() =>{
  const year = new Date().getFullYear()
return <footer className="pb-16 pt-10">
  <div className="container">
<div className="justify-between flex-col md:flex-row flex-wrap  gap-[30px]">
    {/* Logo section  start */}
    <div>
            <h2 className="font-[200] text-xl">
              <span className="text-lg font-[600]">THE</span> <br /> DOCTOR
            </h2>
            {/* <img src="" alt="" /> */}
          </div>
          {/* Logo section  end */}
          <p className="text-[16px] leading-7 fon-[400] text-textColor mt-4">Copyright {year} Powered by DzikDev all right reserved.</p>
          <div className="flex items-center gap-3 mt-4">
{socialLinks.map((link, index) => (<Link to={link.path} key={index} className="w-9 h-9 border-solid border-[#181A1E] rounded-full">
{link.icon}
</Link>
))}
          </div>
</div>
  </div>
</footer>
}
export default Footer