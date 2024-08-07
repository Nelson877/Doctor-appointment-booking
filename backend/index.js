import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from './Routes/auth.js'
import userRoute from './Routes/user.js'
import doctorRoute from './Routes/doctor.js'
import reviewRoute from './Routes/review.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("Server is running");
});

// connection database
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,  
      useUnifiedTopology: true,
    });
    console.log("MongoDB database is connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);  
  }
};




// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser(corsOptions));
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/doctors', doctorRoute)
app.use('/api/v1/reviews', reviewRoute)

app.listen(port, () => {
    connectDB()
  console.log("listening on port" + port);
});
