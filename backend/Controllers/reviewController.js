import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

// getting all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});

    res
      .status(200)
      .json({ success: true, message: "Success! All reviews", data: reviews });
  } catch (err) {
    res.status(404).json({ success: false, message: " Not Found" });
  }
};

// creating  review function

export const createReview = async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.bddy.user = req.userId;



  //new review function
  const newReview = new Review(req.body) 
  try{
//saving review function
const savedReview = await newReview.save()

await Doctor.findByIdAndUpdate(req.body.doctor, {
    $push:{reviews: savedReview._id}
})


res.status(200).jsom({success:true, message:'Review saved successfully', data:savedReview})
  }catch (err) {
    res.status(500).jsom({success:false, message:'Error saving review'})

  }

};
