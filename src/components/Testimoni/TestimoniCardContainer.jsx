import clsx from "clsx";
import PropTypes from "prop-types";

import TestimoniCard from "./TestimoniCard";

const TestimoniCardContainer = ({ data, isReversed = false }) => (
  <div className="mask-layer group flex gap-12 overflow-hidden py-4">
    <div
      className={clsx("group-hover:paused flex animate-scroll gap-12", {
        "animate-scroll-reversed": isReversed,
      })}
    >
      {data.map((item, index) => (
        <TestimoniCard key={index} data={item} />
      ))}
    </div>
    {/* Duplikasi item agar infinite scroll berjalan dengan semestinya */}
    <div
      className={clsx("group-hover:paused flex animate-scroll gap-12", {
        "animate-scroll-reversed": isReversed,
      })}
      aria-hidden="true"
    >
      {data.map((item, index) => (
        <TestimoniCard key={index} data={item} />
      ))}
    </div>
  </div>
);

TestimoniCardContainer.propTypes = {
  data: PropTypes.array,
  isReversed: PropTypes.bool,
};

export default TestimoniCardContainer;
