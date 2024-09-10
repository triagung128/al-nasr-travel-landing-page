import IcEat from "/icons/ic_eat.svg";
import IcFlight from "/icons/ic_flight.svg";
import IcHotel from "/icons/ic_hotel.svg";
import IcTicket from "/icons/ic_ticket.svg";
import IcVisa from "/icons/ic_visa.svg";
import LogoFlyEmirates from "/images/logo_plane/logo_fly_emirates.png";
import LogoGarudaIndonesia from "/images/logo_plane/logo_garuda_indonesia.png";
import LogoLionAir from "/images/logo_plane/logo_lion_air.png";
import LogoQatarAirways from "/images/logo_plane/logo_qatar_airways.png";
import LogoSaudiaAirlines from "/images/logo_plane/logo_saudia_airlines.png";
import ImgPackage1 from "/images/package/img_package_1.png";
import ImgPackage2 from "/images/package/img_package_2.png";
import ImgPackage3 from "/images/package/img_package_3.png";

export const packageData = {
  title: "Al Nasr Special Umrah and Hajj Packages",
  subtitle:
    "Choose your package according to your needs, guaranteed cheap and complete",
  packages: [
    {
      name: "Al Nasr Special Umrah 9 Days",
      price: 1950,
      type: "Bronze",
      category: "Best Seller",
      image: ImgPackage1,
      facilities: [
        {
          name: "Flight",
          icon: IcFlight,
        },
        {
          name: "Ticket",
          icon: IcTicket,
        },
        {
          name: "Hotel",
          icon: IcHotel,
        },
        {
          name: "Visa",
          icon: IcVisa,
        },
      ],
    },
    {
      name: "Al Nasr Special Umrah 17 Days",
      price: 2750,
      type: "Silver",
      category: "Special Seller",
      image: ImgPackage2,
      facilities: [
        {
          name: "Flight",
          icon: IcFlight,
        },
        {
          name: "Ticket",
          icon: IcTicket,
        },
        {
          name: "Hotel",
          icon: IcHotel,
        },
        {
          name: "Visa",
          icon: IcVisa,
        },
      ],
    },
    {
      name: "Al Nasr Special Umrah 25 Days",
      price: 4250,
      type: "Gold",
      category: "Long Trip",
      image: ImgPackage3,
      facilities: [
        {
          name: "Flight",
          icon: IcFlight,
        },
        {
          name: "Ticket",
          icon: IcTicket,
        },
        {
          name: "Hotel",
          icon: IcHotel,
        },
        {
          name: "Visa",
          icon: IcVisa,
        },
        {
          name: "Eat",
          icon: IcEat,
        },
      ],
    },
    {
      name: "Al Nasr Special Hajj 30 Days",
      price: 20000,
      type: "Diamond",
      category: "Best Seller",
      image: ImgPackage1,
      facilities: [
        {
          name: "Flight",
          icon: IcFlight,
        },
        {
          name: "Ticket",
          icon: IcTicket,
        },
        {
          name: "Hotel",
          icon: IcHotel,
        },
        {
          name: "Visa",
          icon: IcVisa,
        },
        {
          name: "Eat",
          icon: IcEat,
        },
      ],
    },
    {
      name: "Al Nasr Special Hajj 30 Days",
      price: 25000,
      type: "Platinum",
      category: "Special Offering",
      image: ImgPackage2,
      facilities: [
        {
          name: "Flight",
          icon: IcFlight,
        },
        {
          name: "Ticket",
          icon: IcTicket,
        },
        {
          name: "Hotel",
          icon: IcHotel,
        },
        {
          name: "Visa",
          icon: IcVisa,
        },
        {
          name: "Eat",
          icon: IcEat,
        },
      ],
    },
  ],
};

export const airwaysData = {
  title: "Airways Accomodation",
  subtitle:
    "Choose your package according to your needs, guaranteed cheap and complete",
  rating: 5.0,
  airways: [
    {
      name: "Garuda Indonesia",
      logo: LogoGarudaIndonesia,
      width: 288,
      height: 77,
    },
    {
      name: "Qatar Airways",
      logo: LogoQatarAirways,
      width: 226,
      height: 77,
    },
    {
      name: "Fly Emirates",
      logo: LogoFlyEmirates,
      width: 137,
      height: 77,
    },
    {
      name: "Saudia Airlines",
      logo: LogoSaudiaAirlines,
      width: 326,
      height: 77,
    },
    {
      name: "Lion Air",
      logo: LogoLionAir,
      width: 295,
      height: 77,
    },
  ],
};
