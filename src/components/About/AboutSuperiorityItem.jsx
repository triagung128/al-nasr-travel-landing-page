import PropTypes from "prop-types";

import SubtitleText from "../ui/SubtitleText";

const AboutSuperiorityItem = ({ icon, text }) => (
  <div className="flex items-center gap-5">
    <img src={icon} alt="ic_flight" className="w-9" />
    <SubtitleText>{text}</SubtitleText>
  </div>
);

AboutSuperiorityItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default AboutSuperiorityItem;
