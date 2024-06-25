import PropTypes from "prop-types";

const Container = ({ children, className }) => {
  return (
    <div
      className={`mx-6 lg:mx-10 xl:mx-24 2xl:mx-auto 2xl:max-w-screen-xl ${className}`}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;
