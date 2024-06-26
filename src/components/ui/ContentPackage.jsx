import icEat from "../../assets/icons/ic_eat.svg";
import icFlight from "../../assets/icons/ic_flight.svg";
import icHotel from "../../assets/icons/ic_hotel.svg";
import icTicket from "../../assets/icons/ic_ticket.svg";
import icVisa from "../../assets/icons/ic_visa.svg";
import imgPackage1 from "../../assets/images/img_package_1.png";
import imgPackage2 from "../../assets/images/img_package_2.png";
import imgPackage3 from "../../assets/images/img_package_3.png";
import CardPackage from "./CardPackage";
import SubTitle from "./SubTitle";
import Title from "./Title";

const packageList = [
  {
    name: "Al Nasr Special Umrah 9 Days",
    price: 1950,
    type: "Bronze",
    category: "Best Seller",
    image: imgPackage1,
    facilities: [
      {
        name: "Flight",
        icon: icFlight,
      },
      {
        name: "Ticket",
        icon: icTicket,
      },
      {
        name: "Hotel",
        icon: icHotel,
      },
      {
        name: "Visa",
        icon: icVisa,
      },
    ],
  },
  {
    name: "Al Nasr Special Umrah 17 Days",
    price: 2750,
    type: "Silver",
    category: "Special Seller",
    image: imgPackage2,
    facilities: [
      {
        name: "Flight",
        icon: icFlight,
      },
      {
        name: "Ticket",
        icon: icTicket,
      },
      {
        name: "Hotel",
        icon: icHotel,
      },
      {
        name: "Visa",
        icon: icVisa,
      },
    ],
  },
  {
    name: "Al Nasr Special Umrah 25 Days",
    price: 4250,
    type: "Gold",
    category: "Long Trip",
    image: imgPackage3,
    facilities: [
      {
        name: "Flight",
        icon: icFlight,
      },
      {
        name: "Ticket",
        icon: icTicket,
      },
      {
        name: "Hotel",
        icon: icHotel,
      },
      {
        name: "Visa",
        icon: icVisa,
      },
      {
        name: "Eat",
        icon: icEat,
      },
    ],
  },
  {
    name: "Al Nasr Special Hajj 30 Days",
    price: 20000,
    type: "Diamond",
    category: "Best Seller",
    image: imgPackage1,
    facilities: [
      {
        name: "Flight",
        icon: icFlight,
      },
      {
        name: "Ticket",
        icon: icTicket,
      },
      {
        name: "Hotel",
        icon: icHotel,
      },
      {
        name: "Visa",
        icon: icVisa,
      },
      {
        name: "Eat",
        icon: icEat,
      },
    ],
  },
  {
    name: "Al Nasr Special Hajj 30 Days",
    price: 25000,
    type: "Platinum",
    category: "Special Offering",
    image: imgPackage2,
    facilities: [
      {
        name: "Flight",
        icon: icFlight,
      },
      {
        name: "Ticket",
        icon: icTicket,
      },
      {
        name: "Hotel",
        icon: icHotel,
      },
      {
        name: "Visa",
        icon: icVisa,
      },
      {
        name: "Eat",
        icon: icEat,
      },
    ],
  },
];

const ContentPackage = () => (
  <>
    <Title className="mx-auto mb-2.5 text-center sm:w-[500px] xl:w-[700px]">
      Al Nasr Special Umrah and Hajj Packages
    </Title>
    <SubTitle className="mx-auto mb-[72px] text-center sm:w-[400px] xl:w-[660px]">
      Choose your package according to your needs, guaranteed cheap and complete
    </SubTitle>
    <div className="grid gap-11 sm:grid-cols-2 sm:gap-5 lg:gap-11 xl:grid-cols-3">
      {packageList.map((item, index) => (
        <CardPackage key={index} packageItem={item} />
      ))}
      <div className="hidden w-full items-center justify-center rounded-[10px] bg-white py-7 shadow-[0_4px_20px_0_rgba(29,165,153,0.15)] sm:flex">
        <p className="font-kufam text-xl font-semibold text-green-dark">
          Soon Program
        </p>
      </div>
    </div>
  </>
);

export default ContentPackage;
