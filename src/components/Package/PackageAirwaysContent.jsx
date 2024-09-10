import PropTypes from "prop-types";

import SubtitleText from "../ui/SubtitleText";
import TitleText from "../ui/TitleText";
import IcStar from "/icons/ic_star.svg";

const PackageAirwaysContent = ({ data }) => (
  <div className="mt-20 flex flex-col items-center">
    <TitleText className="mb-2 text-center text-[32px]">{data.title}</TitleText>
    <SubtitleText className="mb-4 text-center">{data.subtitle}</SubtitleText>
    <div className="flex w-fit items-center gap-2 rounded-full bg-green px-5 py-2.5">
      <img src={IcStar} alt="Rating" width={18} height={18} />
      <p className="text-xl font-medium text-green-dark">
        {data.rating.toFixed(1)} Rating
      </p>
    </div>
    <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-12 sm:flex-row">
      {data.airways.map((item, index) => (
        <img
          key={index}
          src={item.logo}
          alt={item.name}
          width={item.width}
          height={item.height}
          className="block h-16 w-auto"
        />
      ))}
    </div>
  </div>
);

PackageAirwaysContent.propTypes = {
  data: PropTypes.object,
};

export default PackageAirwaysContent;
