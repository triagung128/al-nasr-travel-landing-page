import PropTypes from "prop-types";

const GalleryImageItem = ({ item, className }) => {
  return (
    <img
      src={item.image}
      alt={item.alt}
      className={`${className} h-full w-full bg-center object-cover shadow-lg`}
    />
  );
};

GalleryImageItem.propTypes = {
  item: PropTypes.object,
  className: PropTypes.string,
};

export default GalleryImageItem;
