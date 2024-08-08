import { Link } from "react-router-dom";
import FeatureImage from "./FeatureImage";

const Feature = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          {/* feature content start */}
          <div className="xl:w-[670px]">
            <h2 className="heading">
              Get virtual treatment anytime.
            </h2>
            <ul className="pl-4">
              <li className="text__para">
                1. Schedule the appointment dirtectly.
              </li>
              <li className="text__para">
                1. Schedule the appointment dirtectly.
              </li>
              <li className="text__para">
                2. Search for your physician here, and contact their office.
              </li>
              <li className="text__para">
                3. View our physicians who are accepting new patients, use the
                online <br /> Schedule tool to select an appointment time.
              </li>
            </ul>
            <Link to="/blog-posts">
              <button className="btn">Learn More</button>
            </Link>
          </div>
          {/* image section start  */}
          <FeatureImage />

          {/* image section end  */}
          {/* feature content end */}
        </div>
      </div>
    </section>
  );
};

export default Feature;
