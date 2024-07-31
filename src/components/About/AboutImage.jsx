import PropTypes from "prop-types";

import IcStar from "/icons/ic_star.svg";
import ImgAbout from "/images/about/img_about.png";
import ImgUser3 from "/images/about/img_about_photo_user_1.png";
import ImgUser4 from "/images/about/img_about_photo_user_2.png";
import Logo from "/logo_bg.png";

const AboutImage = () => (
  <div className="relative h-[451px] w-full flex-shrink-0 sm:h-[551px] sm:w-[466px] md:h-[591px] md:w-[506px]">
    <img
      src={ImgAbout}
      alt="Image About"
      className="absolute left-1/2 top-0 h-[91%] w-[85%] -translate-x-1/2 rounded-[20px] object-cover sm:left-0 sm:w-[79.1%] sm:-translate-x-0"
      draggable="false"
    />
    <TestimoniAboutImage
      src={ImgUser4}
      rating={4.8}
      name="Ali Humairah"
      className="absolute top-[42%] sm:right-0 sm:top-[10.8%]"
    />
    <TestimoniAboutImage
      src={ImgUser3}
      rating={4.9}
      name="Sahrul Alqani"
      className="absolute bottom-[16.1%] right-0 sm:right-[9.9%]"
    />
    <img
      src={Logo}
      alt="Logo Text"
      className="absolute bottom-0 left-1/2 h-[13.4%] w-[58.1%] -translate-x-1/2 object-contain sm:left-[11%] sm:-translate-x-0 sm:object-fill"
      draggable="false"
    />
  </div>
);

const TestimoniAboutImage = ({ src, rating, name, className }) => (
  <div
    className={`flex w-[212px] items-center gap-[30px] rounded-[10px] border border-orange bg-white p-2.5 ${className} `}
  >
    <img
      src={src}
      alt="Image User"
      className="h-[70px] w-[68px] rounded-full border border-green-dark"
      draggable="false"
    />
    <div>
      <p className="mb-2 font-kufam text-xs font-semibold leading-tight text-black-title">
        {name}
      </p>
      <p className="flex items-center gap-4 text-xs font-semibold leading-tight text-black-title">
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
