import AboutImage from "../../assets/images/about.png";
import AboutImage1 from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
// import { FaFireExtinguisher } from "react-icons/fa";

const About = () => {
  return (
    <div className="container">
      <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
        {/* about image section start  */}
        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order">
          <img src={AboutImage} alt="" />
          <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[10%]">
            <img src={AboutImage1} alt="" />
          </div>
        </div>
        {/* about image section end  */}

        {/* about content start */}

        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
          <h2 className="heading">Proud to be one of the nation's best.</h2>
          <p className="text__para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus obcaecati aliquid, tempora labore tempore nostrum
            temporibus ratione error beatae est praesentium sapiente, doloribus
            eum, quaerat fugiat earum quam impedit modi.
          </p>
          <p className="text__para mt-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            cumque repudiandae. Dicta aliquid repellendus fugiat hic commodi
            enim repudiandae, officiis ratione optio quasi dolorem libero
            placeat, nihil reprehenderit ab nam.
          </p>
          <Link to="/">
            <button className="btn">View More</button>
            {/* <FaFireExtinguisher /> */}
          </Link>
        </div>
        {/* about content end  */}
      </div>
    </div>
  );
};

export default About;
