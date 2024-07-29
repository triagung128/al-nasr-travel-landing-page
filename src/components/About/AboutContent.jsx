import PropTypes from "prop-types";

import Button from "../ui/Button";
import SubTitle from "../ui/SubTitle";
import Title from "../ui/Title";
import IcFlight from "/icons/ic_flight.svg";
import IcHotel from "/icons/ic_hotel.svg";
import IcTicket from "/icons/ic_ticket.svg";
import IcVisa from "/icons/ic_visa.svg";

const aboutList = [
  {
    icon: IcFlight,
    text: "Flight Jakarta Saudi - Saudi Jakarta",
  },
  {
    icon: IcTicket,
    text: "Tickets are included in the cost",
  },
  {
    icon: IcHotel,
    text: "Comfortable hotel with a rating of 4",
  },
  {
    icon: IcVisa,
    text: "We cover the Visa Fee and it's Included",
  },
];

const AboutContent = () => (
  <div>
    <Title className="sm:max-w-[500px] xl:max-w-full">
      A Wonderful Agency To Fulfill your Dreams
    </Title>
    <SubTitle className="mb-7 mt-4 sm:max-w-[550px] md:max-w-[600px] lg:mb-10 lg:mt-[25px] xl:max-w-full">
      The Hajj and Umrah pilgrimages are smooth, the heart is clean. we have
      been trusted since 2006 and have obtained a license from SAUDI ARABIA to
      become this travel agency.
    </SubTitle>
    <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:gap-5">
      {aboutList.map((item, index) => (
        <AboutItem key={index} src={item.icon} text={item.text} />
      ))}
    </div>
    <div className="flex flex-wrap gap-5 lg:gap-10">
      <Button>Learn more</Button>
      <Button outline={true}>Contact us</Button>
    </div>
  </div>
);

const AboutItem = ({ src, text }) => (
  <div className="flex items-center gap-5">
    <img src={src} alt="ic_flight" />
    <SubTitle>{text}</SubTitle>
  </div>
);

AboutItem.propTypes = {
  src: PropTypes.string,
  text: PropTypes.string,
};

export default AboutContent;
