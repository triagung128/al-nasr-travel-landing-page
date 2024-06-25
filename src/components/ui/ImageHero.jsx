import PropTypes from "prop-types";

import imgHero from "../../assets/images/img_hero.png";
import imgUser1 from "../../assets/images/img_user_1.png";
import imgUser2 from "../../assets/images/img_user_2.png";

const ImageHero = () => (
  <div className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
    <div className="relative h-[34.875em] w-[34.25em]">
      <div className="absolute left-[0.938em] top-1/2 -z-20 h-[15.313em] w-[33.313em] -translate-y-1/2 rounded-[0.625em] bg-green-dark" />
      <img
        src={imgHero}
        alt="Image Hero"
        className="absolute right-[3em] top-0 -z-10 h-[31.688em] w-[25.375em] rounded-[0.625em] border-[0.094em] border-orange"
      />
      <TestimoniImageHero
        src={imgUser2}
        testimoniText="The most amazing city of Mecca"
        name="Mohammad Qassem"
        className="absolute bottom-0 left-0"
      />

      <TestimoniImageHero
        src={imgUser1}
        testimoniText="Let's worship as good Muslims"
        name="Ali Qualadeini"
        className="absolute right-[1.063em] top-[1.625em]"
      />
    </div>
  </div>
);

const TestimoniImageHero = ({ src, testimoniText, name, className }) => (
  <div
    className={`flex w-[14.375em] items-center gap-[0.875em] rounded-[0.625em] border-[0.063em] border-green-dark bg-white p-[0.313em] ${className}`}
  >
    <img
      src={src}
      alt="Image User"
      className="h-[4.375em] w-[4.125em] rounded-full border-[0.063em] border-orange"
      draggable="false"
    />
    <div>
      <p className="mb-[0.5em] text-[0.75em] font-semibold leading-[1.245] text-black-title">{`"${testimoniText}".`}</p>
      <p className="font-kufam text-[0.75em] font-semibold leading-[1.245] text-black-title">
        {name}
      </p>
    </div>
  </div>
);

TestimoniImageHero.propTypes = {
  src: PropTypes.string,
  testimoniText: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default ImageHero;
