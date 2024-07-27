import { formaDate } from "../../utils/formatDate";

const Experience = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Experience
        </h3>
        <ul className='grid sm:grid-cols-2 gap-[15px] p-4 md:p-5'>
          <li className='p-4 rounded bg-whiteColor'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
              {formaDate("09-12-2010")} - {formaDate("09-12-2014")}
            </span>
            <p className='text-[16px] leadinng-6 text-textColor font-bold'>
              Medical Intern
            </p>
            <p className='text-[14px] leading-5 text-textColor font-medium'>
              New Apollo Hospital, Accra
            </p>
          </li>
          <li className='p-4 rounded bg-whiteColor'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
              {formaDate("09-12-2010")} - {formaDate("09-12-2014")}
            </span>
            <p className='text-[16px] leadinng-6 text-textColor font-bold'>
              Medical Intern
            </p>
            <p className='text-[14px] leading-5 text-textColor font-medium'>
              New Apollo Hospital, Accra
            </p>
          </li>
          <li className='p-4 rounded bg-whiteColor'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
              {formaDate("09-12-2010")} - {formaDate("09-12-2014")}
            </span>
            <p className='text-[16px] leadinng-6 text-textColor font-bold'>
              Medical Intern
            </p>
            <p className='text-[14px] leading-5 text-textColor font-medium'>
              New Apollo Hospital, Accra
            </p>
          </li>
          <li className='p-4 rounded bg-whiteColor'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
              {formaDate("09-12-2010")} - {formaDate("09-12-2014")}
            </span>
            <p className='text-[16px] leadinng-6 text-textColor font-bold'>
              Medical Intern
            </p>
            <p className='text-[14px] leading-5 text-textColor font-medium'>
              New Apollo Hospital, Accra
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
