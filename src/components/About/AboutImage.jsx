import PropTypes from "prop-types";

import IcStar from "/icons/ic_star.svg";
import ImgAbout from "/images/about/img_about.png";
import ImgUser3 from "/images/about/img_about_photo_user_1.png";
import ImgUser4 from "/images/about/img_about_photo_user_2.png";
import Logo from "/logo_bg.png";

const AboutImage = () => (
  <div className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
    <div className="relative h-[36.938em] w-[31.625em]">
      <img
        src={ImgAbout}
        alt="Image About"
        className="absolute h-[33.625em] w-[25em]"
        draggable="false"
      />
      <img
        src={Logo}
        alt="Logo Text"
        className="absolute bottom-0 left-[3.575em] h-[4.938em] w-[18.375em]"
        draggable="false"
      />
      <TestimoniAboutImage
        src={ImgUser3}
        rating={4.9}
        name="Sahrul Alqani"
        className="absolute bottom-[95px] right-[50px]"
      />
      <TestimoniAboutImage
        src={ImgUser4}
        rating={4.8}
        name="Ali Humairah"
        className="absolute right-0 top-[4em]"
      />
    </div>
  </div>
);

const TestimoniAboutImage = ({ src, rating, name, className }) => (
  <div
    className={`flex w-[13.25em] items-center gap-[1.875em] rounded-[0.625em] border-[0.063em] border-orange bg-white p-[0.625em] ${className} `}
  >
    <img
      src={src}
      alt="Image User"
      className="h-[4.375em] w-[4.125em] rounded-full border-[0.063em] border-green-dark"
      draggable="false"
    />
    <div>
      <p className="mb-[0.625em] font-kufam text-[0.75em] font-semibold leading-[1.245] text-black-title">
        {name}
      </p>
      <p className="flex items-center gap-[1em] text-[0.875em] font-semibold leading-[1.245] text-black-title">
        <span>
          <img src={IcStar} alt="Rating" className="inline-block" />
        </span>
        {rating.toString()}
      </p>
    </div>
  </div>
);

TestimoniAboutImage.propTypes = {
  src: PropTypes.string,
  rating: PropTypes.number,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default AboutImage;
