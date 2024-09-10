import PropTypes from "prop-types";

const SubtitleText = ({ children, className }) => (
  <p
    className={`text-xl font-semibold leading-[1.5] text-black-content sm:text-2xl sm:leading-[1.5] ${className}`}
  >
    {children}
  </p>
);

SubtitleText.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default SubtitleText;
