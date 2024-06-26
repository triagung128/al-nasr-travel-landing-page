import clsx from "clsx";
import PropTypes from "prop-types";

const Button = ({ children, className, outline = false }) => (
  <button
    className={clsx(
      `cursor-pointer rounded-xl border-2 border-orange bg-orange px-10 py-6 text-base font-bold leading-[0.64] text-black-button xl:px-16 xl:py-7 xl:text-xl xl:leading-[0.64] ${className}`,
      {
        "border-2 border-orange bg-transparent text-orange": outline,
      },
    )}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  outline: PropTypes.bool,
};

export default Button;
