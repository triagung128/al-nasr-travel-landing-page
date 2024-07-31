import PropTypes from "prop-types";

import ImgHero from "/images/hero/img_hero.png";
import ImgUser1 from "/images/hero/img_hero_photo_user_1.png";
import ImgUser2 from "/images/hero/img_hero_photo_user_2.png";

const HeroImage = () => (
  <div className="relative order-1 h-[420px] w-full flex-shrink-0 sm:h-[508px] sm:w-[448px] md:h-[558px] md:w-[548px] xl:order-2">
    <div className="absolute left-[2.7%] top-1/2 -z-20 hidden h-[43.9%] w-[97.2%] -translate-y-1/2 rounded-[10px] bg-green-dark sm:block" />
    <img
      src={ImgHero}
      alt="Image Hero"
      className="absolute right-1/2 top-1/2 -z-10 h-[80%] w-[85%] -translate-y-1/2 translate-x-1/2 rounded-[10px] border-[1.5px] border-orange object-cover sm:right-[8.8%] sm:top-0 sm:h-[90.8%] sm:w-[74.1%] sm:-translate-y-0 sm:translate-x-0"
    />
    <TestimoniHeroImage
      src={ImgUser2}
      testimoniText="The most amazing city of Mecca"
      name="Mohammad Qassem"
      className="absolute bottom-0 left-0"
    />

    <TestimoniHeroImage
      src={ImgUser1}
      testimoniText="Let's worship as good Muslims"
      name="Ali Qualadeini"
      className="absolute right-0 top-0 sm:right-[3.1%] sm:top-[4.7%]"
    />
  </div>
);

const TestimoniHeroImage = ({ src, testimoniText, name, className }) => (
  <div
    className={`flex w-[230px] items-center gap-3.5 rounded-[10px] border border-green-dark bg-white p-[5px] ${className}`}
  >
    <img
      src={src}
      alt="Image User"
      className="h-[70px] w-[67px] rounded-full border border-orange"
      draggable="false"
    />
    <div>
      <p className="mb-2 text-xs font-semibold leading-tight text-black-title">{`"${testimoniText}".`}</p>
      <p className="font-kufam text-xs font-semibold leading-tight text-black-title">
        {name}
      </p>
    </div>
  </div>
);

TestimoniHeroImage.propTypes = {
  src: PropTypes.string,
  testimoniText: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default HeroImage;
