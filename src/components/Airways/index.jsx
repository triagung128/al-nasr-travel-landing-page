import PropTypes from "prop-types";

import SubTitle from "../ui/SubTitle";
import Title from "../ui/Title";
import IcStar from "/icons/ic_star.svg";
import LogoFlyEmirates from "/images/logo_plane/logo_fly_emirates.png";
import LogoGarudaIndonesia from "/images/logo_plane/logo_garuda_indonesia.png";
import LogoLionAir from "/images/logo_plane/logo_lion_air.png";
import LogoQatarAirways from "/images/logo_plane/logo_qatar_airways.png";
import LogoSaudiaAirlines from "/images/logo_plane/logo_saudia_airlines.png";

const airwaysList = [
  {
    name: "Garuda Indonesia",
    logo: LogoGarudaIndonesia,
  },
  {
    name: "Qatar Airways",
    logo: LogoQatarAirways,
  },
  {
    name: "Fly Emirates",
    logo: LogoFlyEmirates,
  },
  {
    name: "Saudia Airlines",
    logo: LogoSaudiaAirlines,
  },
  {
    name: "Lion Air",
    logo: LogoLionAir,
  },
];

const Airways = () => (
  <div className="mt-20 flex flex-col items-center">
    <Title className="text-center text-[32px]">Airways Accomodation</Title>
    <SubTitle className="w-[350px] text-center sm:w-full">
      We cooperate with several airlines for Umrah and Hajj
    </SubTitle>
    <div className="mt-4 flex w-fit items-center gap-2 rounded-full bg-green px-5 py-2.5">
      <img src={IcStar} alt="Rating" />
      <p className="text-xl font-medium text-green-dark">5.0 Rating</p>
    </div>
    <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-12 sm:flex-row">
      {airwaysList.map((item, index) => (
        <LogoAirwaysItem key={index} src={item.logo} alt={item.name} />
      ))}
    </div>
  </div>
);

const LogoAirwaysItem = ({ src, alt }) => (
  <div>
    <img src={src} alt={alt} className="h-16 w-auto" />
  </div>
);

LogoAirwaysItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Airways;
