import PropTypes from "prop-types";

import icStar from "../../assets/icons/ic_star.svg";
import logoAirways1 from "../../assets/images/logo_airways_1.png";
import logoAirways2 from "../../assets/images/logo_airways_2.png";
import logoAirways3 from "../../assets/images/logo_airways_3.png";
import logoAirways4 from "../../assets/images/logo_airways_4.png";
import logoAirways5 from "../../assets/images/logo_airways_5.png";
import SubTitle from "./SubTitle";
import Title from "./Title";

const airwaysList = [
  {
    name: "Garuda Indonesia",
    logo: logoAirways1,
  },
  {
    name: "Qatar Airways",
    logo: logoAirways2,
  },
  {
    name: "Fly Emirates",
    logo: logoAirways3,
  },
  {
    name: "Saudia Airlines",
    logo: logoAirways4,
  },
  {
    name: "Lion Air",
    logo: logoAirways5,
  },
];

const ContentAirways = () => (
  <div className="mt-20 flex flex-col items-center">
    <Title className="text-center text-[32px]">Airways Accomodation</Title>
    <SubTitle className="w-[350px] text-center sm:w-full">
      We cooperate with several airlines for Umrah and Hajj
    </SubTitle>
    <div className="mt-4 flex w-fit items-center gap-2 rounded-full bg-green px-5 py-2.5">
      <img src={icStar} alt="Rating" />
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

export default ContentAirways;
