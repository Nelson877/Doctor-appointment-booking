import About from "../components/About/About";
import Feature from "../components/Feature/Feature";
import HeroImage from "../components/HeroImage/HeroImage";
import HeroText from "../components/HeroText/HeroText";

import Icons from "../components/IconSection/Icons";
import OurDoctor from "../components/OurDoctor/OurDoctor";
import Service from "../components/ServiceSection/Service";

const Home = () => {
  return (
    <>
      {/* Hero section start  */}

      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content  start */}

            <HeroText />
            {/* hero content end  */}

            {/* images section start  */}
            <HeroImage />
            {/* images section end  */}
          </div>
        </div>
      </section>
      {/* Hero section end  */}
      {/* Icons section start  */}
      <Icons />
      {/* Icons section end  */}

      {/* About section start  */}
      <About />
      {/* About section end */}

      {/* Services section start  */}
      <Service />
      {/* Services section end  */}
      {/* Feature section start  */}
      <Feature />
      {/* Feature section end  */}

      {/* Our Doctors section start  */}
      <OurDoctor />
      {/* Our Doctors section end  */}
    </>
  );
};

export default Home;
