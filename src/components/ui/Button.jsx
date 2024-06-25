import PropTypes from "prop-types";

const Button = ({ children, className }) => (
  <button
    className={`cursor-pointer rounded-xl bg-orange px-10 py-6 text-base font-bold leading-[0.64] text-black-button xl:px-16 xl:py-8 xl:text-xl xl:leading-[0.64] ${className}`}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
