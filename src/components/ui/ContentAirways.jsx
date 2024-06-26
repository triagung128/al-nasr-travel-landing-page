import icStar from "../../assets/icons/ic_star.svg";
import logoAirways1 from "../../assets/images/logo_airways_1.png";
import logoAirways2 from "../../assets/images/logo_airways_2.png";
import logoAirways3 from "../../assets/images/logo_airways_3.png";
import logoAirways4 from "../../assets/images/logo_airways_4.png";
import logoAirways5 from "../../assets/images/logo_airways_5.png";
import SubTitle from "./SubTitle";
import Title from "./Title";

const ContentAirways = () => (
  <div className="mt-20 flex flex-col items-center">
    <Title className="text-[32px]">Airways Accomodation</Title>
    <SubTitle>We cooperate with several airlines for Umrah and Hajj</SubTitle>
    <div className="mt-4 flex w-fit items-center gap-2 rounded-full bg-green px-5 py-2.5">
      <img src={icStar} alt="Rating" />
      <p className="text-xl font-medium text-green-dark">5.0 Rating</p>
    </div>
    <div className="mt-10 flex flex-col flex-wrap justify-center gap-12 sm:flex-row">
      <div>
        <img
          src={logoAirways1}
          alt="Garuda Indonesia"
          className="h-16 w-auto"
        />
      </div>
      <div>
        <img src={logoAirways2} alt="Qatar Airways" className="h-16 w-auto" />
      </div>
      <div>
        <img src={logoAirways3} alt="Fly Emirates" className="h-16 w-auto" />
      </div>
      <div>
        <img src={logoAirways4} alt="Saudia Airlines" className="h-16 w-auto" />
      </div>
      <div>
        <img src={logoAirways5} alt="Lion Air" className="h-16 w-auto" />
      </div>
    </div>
  </div>
);

export default ContentAirways;
