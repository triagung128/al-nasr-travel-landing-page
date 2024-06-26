import PropTypes from "prop-types";

import icStar from "../../assets/icons/ic_star.svg";
import imgAbout from "../../assets/images/img_about.png";
import imgUser3 from "../../assets/images/img_user_3.png";
import imgUser4 from "../../assets/images/img_user_4.png";
import logo from "../../assets/logo_bg.png";

const ImageAbout = () => (
  <div className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
    <div className="relative h-[36.938em] w-[31.625em]">
      <img
        src={imgAbout}
        alt="Image About"
        className="absolute h-[33.625em] w-[25em]"
        draggable="false"
      />
      <img
        src={logo}
        alt="Logo Text"
        className="absolute bottom-0 left-[3.575em] h-[4.938em] w-[18.375em]"
        draggable="false"
      />
      <TestimoniImageAbout
        src={imgUser3}
        rating={4.9}
        name="Sahrul Alqani"
        className="absolute bottom-[95px] right-[50px]"
      />
      <TestimoniImageAbout
        src={imgUser4}
        rating={4.8}
        name="Ali Humairah"
        className="absolute right-0 top-[4em]"
      />
    </div>
  </div>
);

const TestimoniImageAbout = ({ src, rating, name, className }) => (
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
          <img src={icStar} alt="Rating" className="inline-block" />
        </span>
        {rating.toString()}
      </p>
    </div>
  </div>
);

TestimoniImageAbout.propTypes = {
  src: PropTypes.string,
  rating: PropTypes.number,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default ImageAbout;
