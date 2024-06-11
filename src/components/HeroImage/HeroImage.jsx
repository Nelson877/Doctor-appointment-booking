import heroImage from "../../assets/images/hero-img01.png";
import heroImage2 from "../../assets/images/hero-img02.png";
import heroImage3 from "../../assets/images/hero-img03.png";

const HeroImage = () => {
  return (
    <div className="flex gap-[30px] justify-end">
      <div>
        <img src={heroImage} className="w-full" alt="" />
      </div>
      <div className="mt-[30px]">
        <img src={heroImage2} className="w-full mb-[30px]" alt="" />
        <img src={heroImage3} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default HeroImage;
