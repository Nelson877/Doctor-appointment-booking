import { HiStar } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'
import PatientAvatar from '../../assets/images/patient-avatar.png'
import { Pagination } from "swiper/modules";


const Test = () => {
    return (
     <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}} breakpoints={{
        640:{ 
            slidesPerView:1,
            spaceBetween:0
        },
        768:{
            slidesPerView:2,
            spaceBetween:20
        },
        1024:{
            slidesPerView:3,
            spaceBetween:30
        }
     }}>
{/* part one start  */}
<SwiperSlide>
<div className="py-[30px] px-5 rounded-3">
    <div className="flex items-center gap-[13px]">
        <img src={PatientAvatar} alt="" />
        <div className="text-[18px] leading-[30px] font-semibold text-headingColor">
            <h4>Muhibur Rahman</h4>
            <div className="flex items-center gap-[2px]">
                <HiStar className="text-yellowColor w-[18px] h-5"/>
                <HiStar className="text-yellowColor w-[18px] h-5"/>
                <HiStar className="text-yellowColor w-[18px] h-5"/>
                <HiStar className="text-yellowColor w-[18px] h-5"/>
                <HiStar className="text-yellowColor w-[18px] h-5"/>
            </div>
        </div>
    </div>
    <p className="text-[16px] leading-7 mt-4 font-[400] text-textColor ">
        "I have taken service from them. They treat so well and tthey are provding the best medical services."
    </p>
</div>

</SwiperSlide>
{/* part one end  */}
{/* part two start  */}
<SwiperSlide>
<div className="py-[30px] px-5 rounded-3">
    <div className="flex items-center gap-[13px]">
        <img src={PatientAvatar} alt="" />
        <div className="text-[18px] leading-[30px] font-semibold text-headingColor">
            <h4>Dzikson Nelson</h4>
            <div className="flex items-center gap-[2px]">
                <HiStar className="text-yellowColor w-[18px] h-5"/>
                <HiStar className="text-yellowColor w-[18px] h-5"/>
                <HiStar className="text-yellowColor w-[18px] h-5"/>
                <HiStar className="text-yellowColor w-[18px] h-5"/>
                <HiStar className="text-yellowColor w-[18px] h-5"/>
            </div>
        </div>
    </div>
    <p className="text-[16px] leading-7 mt-4 font-[400] text-textColor ">
        "I have taken service from them. They treat so well and tthey are provding the best medical services."
    </p>
</div>

</SwiperSlide>
{/* part two end  */}
{/* part three start  */}
<SwiperSlide>
<div className="py-[30px] px-5 rounded-3">
    <div className="flex items-center gap-[13px]">
        <img src={PatientAvatar} alt="" />
        <div className="text-[18px] leading-[30px] font-semibold text-headingColor">
            <h4>Dziknel Neldzik</h4>
            <div className="flex items-center gap-[2px]">
                <HiStar className="text-yellowColor w-[18px] h-5"/>
                <HiStar className="text-yellowColor w-[18px] h-5"/>
                <HiStar className="text-yellowColor w-[18px] h-5"/>
                <HiStar className="text-yellowColor w-[18px] h-5"/>
                <HiStar className="text-yellowColor w-[18px] h-5"/>
            </div>
        </div>
    </div>
    <p className="text-[16px] leading-7 mt-4 font-[400] text-textColor ">
        "I have taken service from them. They treat so well and tthey are provding the best medical services."
    </p>
</div>

</SwiperSlide>
{/* part three end  */}
{/* part one start  */}
<SwiperSlide>
<div className="py-[30px] px-5 rounded-3">
    <div className="flex items-center gap-[13px]">
        <img src={PatientAvatar} alt="" />
        <div className="text-[18px] leading-[30px] font-semibold text-headingColor">
            <h4>Muhibur Rahman</h4>
            <div className="flex items-center gap-[2px]">
                <HiStar className="text-yellowColor w-[18px] h-5"/>
                <HiStar className="text-yellowColor w-[18px] h-5"/>
                <HiStar className="text-yellowColor w-[18px] h-5"/>
                <HiStar className="text-yellowColor w-[18px] h-5"/>
                <HiStar className="text-yellowColor w-[18px] h-5"/>
            </div>
        </div>
    </div>
    <p className="text-[16px] leading-7 mt-4 font-[400] text-textColor ">
        "I have taken service from them. They treat so well and tthey are provding the best medical services."
    </p>
</div>

</SwiperSlide>
{/* part one end  */}

     </Swiper>
    );
  };
  
  export default Test;
  