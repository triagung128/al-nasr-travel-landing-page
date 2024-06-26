import icBed from "../../assets/icons/ic_bed.svg";
import icConseling from "../../assets/icons/ic_conseling.svg";
import icEat from "../../assets/icons/ic_eat.svg";
import icHealth from "../../assets/icons/ic_health.svg";
import icMembership from "../../assets/icons/ic_membership.svg";
import icSafety from "../../assets/icons/ic_safety.svg";
import icVaccine from "../../assets/icons/ic_vaccine.svg";
import icVehicle from "../../assets/icons/ic_vehicle.svg";
import CardFacility from "./CardFacility";
import SubTitle from "./SubTitle";
import Title from "./Title";

const facilitiesList = [
  {
    name: "Safety & Security",
    desc: "We take care of your security in 24 hours",
    logo: icSafety,
  },
  {
    name: "Conseling",
    desc: "Provide counseling to stay fit spiritually and religius",
    logo: icConseling,
  },
  {
    name: "Vehicle In Saudi",
    desc: "Bus and Car Vehicles While in Saudi",
    logo: icVehicle,
  },
  {
    name: "Health In Saudi",
    desc: "Free Health Facilities for every customer",
    logo: icHealth,
  },
  {
    name: "Hostel Rate 5",
    desc: "5 star hotel accommodation every customer",
    logo: icBed,
  },
  {
    name: "Food & Drink",
    desc: "Provide food and drinks while in Saudi",
    logo: icEat,
  },
  {
    name: "Membership",
    desc: "Obtain a membership card for each customer",
    logo: icMembership,
  },
  {
    name: "Vaccine",
    desc: "Free meningitis vaccine for all customers",
    logo: icVaccine,
  },
];

const ContentFacilites = () => (
  <div>
    <Title className="mb-2 text-center">Facilities We Provide For You</Title>
    <SubTitle className="mx-auto mb-[50px] text-center sm:w-[400px] lg:w-[450px] xl:w-[660px]">
      We provide comfort for our customers, with the various facilities we
      provide that we provide
    </SubTitle>
    <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {facilitiesList.map((item, index) => (
        <CardFacility key={index} item={item} />
      ))}
    </div>
  </div>
);

export default ContentFacilites;
