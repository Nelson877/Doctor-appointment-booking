import Image from "../../assets/images/feature-img.png";
import VideoIcon from "../../assets/images/video-icon.png";
import AvatarIcon from "../../assets/images/avatar-icon.png";

const FeatureImage = () => {
  return (
    <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
      <img src={Image} alt="" className="w-3/4" />
      <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[6px] lg:gap-3">
            <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
              Tue, 24
            </p>
            <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
              10:00AM
            </p>
          </div>
          <span className="w-5 h-5 lg:w-[34px] lg:h=[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
            <img src={VideoIcon} alt="" />
          </span>
        </div>

        {/*Consultation  section start  */}

        <div className="w-[65px] rounded-full lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 ">
          Consultation
        </div>
        {/* Consultation section end  */}
        {/* Avatar icon section start  */}
        <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
          <img src={AvatarIcon} alt="" />
          <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
            Wayne Collins
          </h4>
        </div>

        {/* Avatar icon section end  */}
      </div>
    </div>
  );
};

export default FeatureImage;
