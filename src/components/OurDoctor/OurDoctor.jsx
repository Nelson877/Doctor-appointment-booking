import DoctorList from "./DoctorList";

const OurDoctor = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our Doctors</h2>
          <p className="text__para text-center">
            To all the doctors who work tirelessly to keep <br /> us healthy and
            safe, thank you for your dedication and sacrifice.
          </p>
        </div>

        <DoctorList/>
      </div>
    </section>
  );
};

export default OurDoctor;
