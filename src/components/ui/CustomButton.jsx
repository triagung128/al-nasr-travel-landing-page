import clsx from "clsx";
import PropTypes from "prop-types";

const CustomButton = ({ children, className, outline = false }) => (
  <button
    className={clsx(
      `cursor-pointer rounded-xl border-2 border-orange bg-orange px-14 py-7 text-lg font-bold leading-[0.64] text-black-button xl:px-16 xl:text-xl xl:leading-[0.64] ${className}`,
      {
        "bg-transparent text-orange": outline,
      },
    )}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  outline: PropTypes.bool,
};

export default CustomButton;
