import PropTypes from "prop-types";

const SubtitleText = ({ children, className }) => (
  <h4
    className={`text-xl font-semibold leading-[1.5] text-black-content sm:text-2xl sm:leading-[1.5] ${className}`}
  >
    {children}
  </h4>
);

SubtitleText.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default SubtitleText;
