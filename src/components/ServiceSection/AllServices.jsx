
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllServices = ({item, index}) => {
    const { name, desc } = item;
  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {desc}
      </p>

      <div className="flex items-center justify-between mt-[30px]">
        <Link
          to="/our-services"
          className="w-[44px] h-[44px] rounded-full border border-solid  border-[#181A1E]  flex items-center justify-center hover:bg-primaryColor hover:border-none hover:text-white"
        >
          <FaArrowRight />
        </Link>
      
      </div>
    </div>
  )
}

export default AllServices
