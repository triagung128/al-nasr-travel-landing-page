import PropTypes from "prop-types";

import SubtitleText from "../ui/SubtitleText";
import TitleText from "../ui/TitleText";
import FacilityCardItem from "./FacilityCardItem";

const FacilityContent = ({ data }) => (
  <div>
    <TitleText className="mb-2 text-center">{data.title}</TitleText>
    <SubtitleText className="mx-auto mb-[50px] text-center sm:w-[400px] lg:w-[450px] xl:w-[660px]">
      {data.subtitle}
    </SubtitleText>
    <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.facilities.map((item, index) => (
        <FacilityCardItem key={index} item={item} />
      ))}
    </div>
  </div>
);

FacilityContent.propTypes = {
  data: PropTypes.object,
};

export default FacilityContent;
