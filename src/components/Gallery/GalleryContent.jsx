import PropTypes from "prop-types";

import SubtitleText from "../ui/SubtitleText";
import TitleText from "../ui/TitleText";
import GalleryImageItem from "./GalleryImageItem";

const GalleryContent = ({ data }) => (
  <>
    <TitleText className="mb-2.5 text-center">{data.title}</TitleText>
    <SubtitleText className="mx-auto mb-[70px] text-center lg:w-[660px]">
      {data.subtitle}
    </SubtitleText>
    <div className="grid gap-y-4 sm:grid-cols-[minmax(0,_1.6fr)_repeat(2,_minmax(0,_1fr))] sm:gap-4 lg:gap-6">
      {data.images.map((item, index) => (
        <GalleryImageItem
          key={index}
          item={item}
          className={index === 0 ? "row-span-2" : ""}
        />
      ))}
    </div>
  </>
);

GalleryContent.propTypes = {
  data: PropTypes.object,
};

export default GalleryContent;
