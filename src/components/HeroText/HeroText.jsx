const HeroText = () => {
  return (
    <div>
      <div className="lg:w-[570px]">
        <h1 className="text-[36px] leading-[46px] text-headerColor font-[500] md:leading-[70px] md:text-[60px]">
          You only have one life, live it well.
        </h1>
        <p className="text__para">
          Both "doctor's appointment" and "doctor appointment" are valid terms
          for a medical visit. The 's in "doctor's appointment" signifies
          association, not possession, indicating the appointment is related to
          a doctor.
        </p>

        <button className="btn">Requests an Appointment</button>
      </div>
      {/* hero content  end */}

      <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
        {/* set 1 start  */}
        <div>
          <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headerColor">
            30+
          </h2>
          <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
          <p className="text__para">Yours of Experience</p>
        </div>
        {/* set 1 end  */}
        {/* set 2 start  */}
        <div>
          <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headerColor">
            15+
          </h2>
          <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
          <p className="text__para">Clinic Location</p>
        </div>
        {/* set 2 end  */}
        {/* set 3 start  */}
        <div>
          <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headerColor">
            100%
          </h2>
          <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
          <p className="text__para">Patient Satisfaction</p>
        </div>
        {/* set 3 end  */}
      </div>
    </div>
  );
};

export default HeroText;