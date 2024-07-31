import PropTypes from "prop-types";

import CustomButton from "../ui/CustomButton";
import SubtitleText from "../ui/SubtitleText";
import TitleText from "../ui/TitleText";
import AboutSuperiorityItem from "./AboutSuperiorityItem";

const AboutContent = ({ data }) => (
  <div>
    <TitleText className="mb-4 lg:w-[800px] xl:w-full">{data.title}</TitleText>
    <SubtitleText className="mb-7">{data.content.description}</SubtitleText>
    <div className="mb-10 flex flex-col gap-5">
      {data.content.superiority.map((item, index) => (
        <AboutSuperiorityItem key={index} icon={item.icon} text={item.text} />
      ))}
    </div>
    <div className="flex flex-wrap gap-5">
      <CustomButton>Learn more</CustomButton>
      <CustomButton outline={true}>Contact us</CustomButton>
    </div>
  </div>
);

AboutContent.propTypes = {
  data: PropTypes.object,
};

export default AboutContent;
