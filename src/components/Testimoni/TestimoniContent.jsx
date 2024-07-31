import PropTypes from "prop-types";

import SubtitleText from "../ui/SubtitleText";
import TitleText from "../ui/TitleText";
import TestimoniCardContainer from "./TestimoniCardContainer";

const TestimoniContent = ({ data }) => {
  return (
    <>
      <TitleText className="ml-auto text-end md:w-[400px] xl:w-[550px]">
        {data.title}
      </TitleText>
      <SubtitleText className="mb-10 ml-auto text-end md:w-[450px] xl:w-[600px]">
        {data.subtitle}
      </SubtitleText>
      <TestimoniCardContainer data={data.testimonials1} />
      <TestimoniCardContainer data={data.testimonials2} isReversed={true} />
    </>
  );
};

TestimoniContent.propTypes = {
  data: PropTypes.object,
};

export default TestimoniContent;
