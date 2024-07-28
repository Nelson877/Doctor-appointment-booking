const SidePanel = () => {
  return (
    <div className='shadow-2xl p-3 lg:p-5 rounded-md'>
      <div className='flex items-center justify-between'>
        <p className='text__paraa mt-0 font-semibold'>Ticket price</p>
        <span className='text-[16px] leading-7 lg:text-[22px] lg:leadinng-8 font-bold texxt-headingColor'>
          500 BDT
        </span>
      </div>

      <div className='mt-[30px] '>
        <p className='text__para mt-0 font-semibold text-headingColor'>
          Available Time Slots:
        </p>
        <ul className='t-3 '>
        {/* start  */}

        <li className='mb-2 flex justify-between items-center'>
            <p className='text-[15px] leading-6 text-headingColor font-semibold'>
              Sunday
            </p>
            <p className='text-[15px] leading-6 text-headingColor font-semibold'>
              4:00am - 9:30pm
            </p>
          </li>
        {/* end */}
         {/* start  */}

         <li className='mb-2 flex justify-between items-center'>
            <p className='text-[15px] leading-6 text-headingColor font-semibold'>
              Monday
            </p>
            <p className='text-[15px] leading-6 text-headingColor font-semibold'>
              4:00am - 9:30pm
            </p>
          </li>
        {/* end */}
         {/* start  */}

         <li className='mb-2 flex justify-between items-center'>
            <p className='text-[15px] leading-6 text-headingColor font-semibold'>
              Wedneday
            </p>
            <p className='text-[15px] leading-6 text-headingColor font-semibold'>
              4:00am - 9:30pm
            </p>
          </li>
        {/* end */}
        </ul>
      </div>
      <button className="btn px-2 w-full rounded-md">Book Appointment</button>
    </div>
  );
};

export default SidePanel;
