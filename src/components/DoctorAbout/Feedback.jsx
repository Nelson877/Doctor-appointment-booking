import { AiFillStar } from "react-icons/ai";
import avatar from "../../assets/images/feature-img.png";
import { formaDate } from "../../utils/formatDate";
import { useState } from "react";
import FeedbackChat from "./FeedbackChat";

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] font-bold  leading-[30px] text-headingColor mb-[30px]'>
          All Reviews (272)
        </h4>
        {/* Comment section start */}
        <div className='flex justify-between mb-[30px] gap-10'>
          <div className='flex gap-3'>
            <figure className='md:w-10 md:h-10 rounded-full overflow-hidden'>
              <img
                className='md:w-full md:h-full object-cover rounded-full'
                src={avatar}
                alt='Avatar'
              />
            </figure>

            {/* Name & date section start */}
            <div>
              <h5 className='text-[16px] font-bold leading-6 text-primaryColor'>
                Dzikson Dziknel
              </h5>
              <p className='text-[14px] leading-6 text-textColor'>
                {formaDate("02-14-2024")}
              </p>
              {/* star section start */}
              <div className='flex gap-1 md:hidden inline-flex'>
                {[...Array(5).keys()].map((_, index) => (
                  <AiFillStar key={index} color='#FEB60D' />
                ))}
              </div>
              {/* star section end */}
              <p className='text__para mt-3 w-[300px] md:w-[500px] text-[15px] font-medium'>
                I was really happy with the consultation I had with Dr. Dzikunu
                Nelson, he was very nice and patient with me and explained
                things well to me. Thank you again.
              </p>
            </div>
            {/* Name & date section end */}
          </div>

          {/* star section start */}
          <div className='flex gap-1 hidden md:inline-flex'>
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color='#FEB60D' />
            ))}
          </div>
          {/* star section end */}
        </div>
        {/* Comment section end */}
        {/* Comment section start */}
        <div className='flex justify-between mb-[30px] gap-10'>
          <div className='flex gap-3'>
            <figure className='md:w-10 md:h-10 rounded-full overflow-hidden'>
              <img
                className='md::w-full md:h-full object-cover rounded-full'
                src={avatar}
                alt='Avatar'
              />
            </figure>

            {/* Name & date section start */}
            <div>
              <h5 className='text-[16px] font-bold leading-6 text-primaryColor'>
                Dzikson Dziknel
              </h5>
              <p className='text-[14px] leading-6 text-textColor'>
                {formaDate("08-20-2024")}
              </p>
               {/* star section start */}
               <div className='flex gap-1 md:hidden inline-flex'>
                {[...Array(5).keys()].map((_, index) => (
                  <AiFillStar key={index} color='#FEB60D' />
                ))}
              </div>
              {/* star section end */}
              <p className='text__para mt-3 text-[15px] w-[300px] md:w-[500px] font-medium'>
                Dr Dzikunu Nelson is a very good listener. Of all the doctors I
                have talked to in 40 years he was by far the best at
                understanding my bipolar, my treatment and life history. He was
                really good at understanding what was needed what was possible
                and making it happen.
              </p>
            </div>
            {/* Name & date section end */}
          </div>

          {/* star section start */}
          <div className='flex gap-1 hidden md:inline-flex'>
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color='#FEB60D' />
            ))}
          </div>
          {/* star section end */}
        </div>
        {/* Comment section end */}
      </div>

      {/* feedback button section start  */}
      {!showFeedbackForm && (
        <div className='text-center'>
          <button className='btn' onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}
      {showFeedbackForm && <FeedbackChat />}
      {/* feedback button section end  */}
    </div>
  );
};

export default Feedback;
