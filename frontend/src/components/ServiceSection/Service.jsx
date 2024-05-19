import ServicesList from "./ServicesList";

const Service = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our Medical Services</h2>
          <p className="text__para text-center ">
            Our medical services are designed to give affordable access to
            medical care for insured, uninsured and underinsuredd clients.
          </p>
        </div>
        <ServicesList />
      </div>
    </section>
  );
};

export default Service;
