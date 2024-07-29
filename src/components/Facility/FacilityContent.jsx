import SubTitle from "../ui/SubTitle";
import Title from "../ui/Title";
import FacilityCard from "./FacilityCard";
import IcBed from "/icons/ic_bed.svg";
import IcConseling from "/icons/ic_conseling.svg";
import IcEat from "/icons/ic_eat.svg";
import IcHealth from "/icons/ic_health.svg";
import IcMembership from "/icons/ic_membership.svg";
import IcSafety from "/icons/ic_safety.svg";
import IcVaccine from "/icons/ic_vaccine.svg";
import IcVehicle from "/icons/ic_vehicle.svg";

const facilitiesList = [
  {
    name: "Safety & Security",
    desc: "We take care of your security in 24 hours",
    logo: IcSafety,
  },
  {
    name: "Conseling",
    desc: "Provide counseling to stay fit spiritually and religius",
    logo: IcConseling,
  },
  {
    name: "Vehicle In Saudi",
    desc: "Bus and Car Vehicles While in Saudi",
    logo: IcVehicle,
  },
  {
    name: "Health In Saudi",
    desc: "Free Health Facilities for every customer",
    logo: IcHealth,
  },
  {
    name: "Hostel Rate 5",
    desc: "5 star hotel accommodation every customer",
    logo: IcBed,
  },
  {
    name: "Food & Drink",
    desc: "Provide food and drinks while in Saudi",
    logo: IcEat,
  },
  {
    name: "Membership",
    desc: "Obtain a membership card for each customer",
    logo: IcMembership,
  },
  {
    name: "Vaccine",
    desc: "Free meningitis vaccine for all customers",
    logo: IcVaccine,
  },
];

const FacilityContent = () => (
  <div>
    <Title className="mb-2 text-center">Facilities We Provide For You</Title>
    <SubTitle className="mx-auto mb-[50px] text-center sm:w-[400px] lg:w-[450px] xl:w-[660px]">
      We provide comfort for our customers, with the various facilities we
      provide that we provide
    </SubTitle>
    <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {facilitiesList.map((item, index) => (
        <FacilityCard key={index} item={item} />
      ))}
    </div>
  </div>
);

export default FacilityContent;
