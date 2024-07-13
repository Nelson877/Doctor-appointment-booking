import { servicesnew } from "../assets/data/servicenew";
import AllServices from "../components/ServiceSection/AllServices";


function Services() {
  return <section>
    <div className="container">
    <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our Medical Services</h2>
          <p className="text__para text-center">
            Our medical services are designed to give affordable access to
            medical care for insured, uninsured and underinsuredd clients.
          </p>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {servicesnew.map((item, index) => (
        <AllServices item={item} index={index} key={index} />
      ))}
    </div>
    </div>
  </section>
}

export default Services;
