import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackChat = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");

const  handleSubmitReview = async e =>{
    e.preventDefault()



    // using our api
}


  return (
    <form action=''>
      {/* head text and star rating  section start  */}
      <div>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
          How would you rate the overall experience?*
        </h3>
        {/* star section start */}
        <div className='flex gap-1'>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;

            return (
              <button
                key={index}
                type='button'
                className={`${
                  index <= (hover || rating)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
        {/* star section end */}
      </div>
      {/* head text and star rating  section end */}

      {/* form section start  */}
      <div className='mt-[30px]'>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
          Share your feedback or suggestion*
        </h3>
        <textarea
          className='border border-solid border-[#0066ff34] focus-outline outline-primaryColor w-full px-4 py-3 rounded-md'
          rows='5'
          placeholder='Write your message here...'
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>
      <button className='btn' type='submit' onClick={handleSubmitReview}>
        Submit Feedback
      </button>
      {/* form section end  */}
    </form>
  );
};

export default FeedbackChat;
