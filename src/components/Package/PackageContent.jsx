import PropTypes from "prop-types";

import SubtitleText from "../ui/SubtitleText";
import TitleText from "../ui/TitleText";
import PackageCardItem from "./PackageCardItem";

const PackageContent = ({ data }) => (
  <>
    <TitleText className="mx-auto mb-2.5 text-center sm:w-[500px] xl:w-[700px]">
      {data.title}
    </TitleText>
    <SubtitleText className="mx-auto mb-[72px] text-center sm:w-[400px] xl:w-[660px]">
      {data.subtitle}
    </SubtitleText>
    <div className="grid gap-11 sm:grid-cols-2 sm:gap-5 lg:gap-11 xl:grid-cols-3">
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
