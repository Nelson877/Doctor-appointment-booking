
import DoctorCard from "../../components/OurDoctor/DoctorCard"
import { doctors } from "../../assets/data/doctors"


const Doctor = () => {
  return (
   <>
    {/* search section start */}
   <section className="bg-yellow-50">
<div className="container text-center">
<h2 className="heading">Find a Doctor</h2>
<div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
<input type="search" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:ext-textColor" placeholder="Search for a Doctor" />
<button className="btn mt-0 rounded-[0px] rounded-r-md">Search</button>
</div>
</div>
   </section>

   {/* search section end  */}


   <section>

   </section>
   </>
  )
}

export default Doctor
