import clsx from "clsx";
import PropTypes from "prop-types";

import CardTestimoni from "./CardTestimoni";

const CardTestimoniContainer = ({ data, isReversed = false }) => (
  <div className="mask-layer group flex gap-12 overflow-hidden py-4">
    <div
      className={clsx("animate-scroll group-hover:paused flex gap-12", {
        "animate-scroll-reversed": isReversed,
      })}
    >
      {data.map((item, index) => (
        <CardTestimoni key={index} data={item} />
      ))}
    </div>
    {/* Duplikasi item agar infinite scroll berjalan dengan semestinya */}
    <div
      className={clsx("animate-scroll group-hover:paused flex gap-12", {
        "animate-scroll-reversed": isReversed,
      })}
      aria-hidden="true"
    >
      {data.map((item, index) => (
        <CardTestimoni key={index} data={item} />
      ))}
    </div>
  </div>
);

CardTestimoniContainer.propTypes = {
  data: PropTypes.array,
  isReversed: PropTypes.bool,
};

export default CardTestimoniContainer;
