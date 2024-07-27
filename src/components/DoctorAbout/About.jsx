import Education from "./Education";
import Experience from "./Experience";


const About = () => {
  return (
    <div>
      {/* about section start  */}
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
          About of
          <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
            Dr.Dzikunu Nelson
          </span>
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur id
          molestiae voluptates repellat neque sequi aliquid maxime qui amet ea
          odio, distinctio laborum excepturi ut dolores cumque velit, expedita
          veniam?
        </p>
      </div>
      {/* about section end */}

      {/* about section sart  */}
      {/* education section start  */}
      <div className='mt-12'>
        <Education/>
      </div>
      {/* education section end  */}
         {/* experience section start  */}
         <div className='mt-12'>
        <Experience/>
      </div>
      {/* experience section end  */}
    </div>
  );
};

export default About;
