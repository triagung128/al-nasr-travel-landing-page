import PropTypes from "prop-types";

import CustomButton from "../ui/CustomButton";
import SubtitleText from "../ui/SubtitleText";
import TitleText from "../ui/TitleText";
import AboutSuperiorityItem from "./AboutSuperiorityItem";

const AboutContent = ({ data }) => (
  <div>
    <TitleText className="sm:max-w-[500px] xl:max-w-full">
      {data.title}
    </TitleText>
    <SubtitleText className="mb-7 mt-4 sm:max-w-[550px] md:max-w-[600px] lg:mb-10 lg:mt-[25px] xl:max-w-full">
      {data.content.description}
    </SubtitleText>
    <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:gap-5">
      {data.content.superiority.map((item, index) => (
        <AboutSuperiorityItem key={index} icon={item.icon} text={item.text} />
      ))}
    </div>
    <div className="flex flex-wrap gap-5 lg:gap-10">
      <CustomButton>Learn more</CustomButton>
      <CustomButton outline={true}>Contact us</CustomButton>
    </div>
  </div>
);

AboutContent.propTypes = {
  data: PropTypes.object,
};

export default AboutContent;
