import CustomButton from "../ui/CustomButton";
import SubtitleText from "../ui/SubtitleText";
import TitleText from "../ui/TitleText";

const HeroContent = () => (
  <div className="order-2 xl:order-1">
    <p className="mb-7 w-fit rounded-full bg-green px-7 py-3.5 text-xl font-medium leading-[0.64] text-green-dark xl:mb-9 xl:px-10 xl:text-2xl xl:leading-[0.64]">
      No. 1 in Indonesia
    </p>
    <TitleText className="mb-4 xl:max-w-[527px]">
      Make it easy for your Umrah worship with Al Nasr Travel
    </TitleText>
    <SubtitleText className="mb-8 xl:max-w-[645px]">
      Facilitate your Umrah pilgrimage with us, we already have hundreds of
      thousands of customers, you can go for Umrah to Mecca and Medina.
    </SubtitleText>
    <CustomButton>Contact us</CustomButton>
  </div>
);

export default HeroContent;
