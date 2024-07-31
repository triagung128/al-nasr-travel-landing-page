import PropTypes from "prop-types";

const TitleText = ({ children, className }) => (
  <h1
    className={`font-kufam text-3xl font-bold leading-[1.4] text-black-title xl:text-5xl xl:leading-[1.4] ${className}`}
  >
    {children}
  </h1>
);

TitleText.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default TitleText;
