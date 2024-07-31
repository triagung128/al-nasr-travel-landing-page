import PropTypes from "prop-types";

const SubtitleText = ({ children, className }) => (
  <h4
    className={`text-lg font-semibold leading-[1.5] text-black-content xl:text-2xl xl:leading-[1.5] ${className}`}
  >
    {children}
  </h4>
);

SubtitleText.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default SubtitleText;
