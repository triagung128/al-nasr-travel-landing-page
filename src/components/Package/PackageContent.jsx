import PropTypes from "prop-types";

import SubtitleText from "../ui/SubtitleText";
import TitleText from "../ui/TitleText";
import PackageCardItem from "./PackageCardItem";

const PackageContent = ({ data }) => (
  <>
    <TitleText className="mx-auto mb-2.5 text-center lg:w-[700px]">
      {data.title}
    </TitleText>
    <SubtitleText className="mx-auto mb-[72px] text-center lg:w-[660px]">
      {data.subtitle}
    </SubtitleText>
    <div className="grid justify-items-center gap-6 md:grid-cols-2 md:gap-5 lg:gap-11 xl:grid-cols-3">
      {data.packages.map((item, index) => (
        <PackageCardItem key={index} data={item} />
      ))}
      <PackageCardItem />
    </div>
  </>
);

PackageContent.propTypes = {
  data: PropTypes.object,
};

export default PackageContent;
