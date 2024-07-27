import { formaDate } from "../../utils/formatDate";

const Education = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Education
        </h3>
        <ul className='pt-4 md:p-5'>
          {/* start */}
          <li className='flex flex-col sm:flex-row sm:justify-between  sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='ext-[15px] leading-6 font-semibold text-irisBlueColor'>
                {formaDate("09-12-2010")} - {formaDate("09-12-2014")}
              </span>
              <p className='text-[15px] leading-6 text-textColor font-medium'>
                PHD in Sugeon
              </p>
            </div>
            <p className='text-[14px] leading-5 text-textColor font-medium'>
              New Apollo Hospital, Accra.
            </p>
          </li>
          {/* end */}
          {/* start */}
          <li className='flex flex-col sm:flex-row sm:justify-between  sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-[15px] leading-6 font-semibold text-irisBlueColor'>
                {formaDate("06-04-2019")} - {formaDate("06-04-2020")}
              </span>
              <p className='text-[15px] leading-6 text-textColor font-medium'>
                PHD in Sugeon
              </p>
            </div>
            <p className='text-[14px] leading-5 text-textColor font-medium'>
              New Apollo Hospital, Accra.
            </p>
          </li>
          {/* end */}
        </ul>
      </div>
    </div>
  );
};

export default Education;
