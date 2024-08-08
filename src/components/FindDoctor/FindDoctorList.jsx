import { allDoctors } from "../../assets/data/allDoctor";
import FindDoctorCard from "./FindDoctorCard";

const FindDoctorList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {allDoctors.map((allDoctor) => (
            <FindDoctorCard key={allDoctor.id} allDoctor={allDoctor} />
          ))}
        </div>
      );
    };
    

export default FindDoctorList
