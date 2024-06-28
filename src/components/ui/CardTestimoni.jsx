import PropTypes from "prop-types";

import icStar from "../../assets/icons/ic_star.svg";

const CardTestimoni = ({ data }) => (
  <div className="flex gap-5 rounded-[10px] bg-white px-[26px] py-5 shadow-[0_2px_8px_0_rgba(0,0,0,0.12)]">
    <div className="w-[100px]">
      <img
        src={data.user.imageProfile}
        alt="Profile"
        width={100}
        height={100}
        className="mb-[18px] max-w-[100px]"
        draggable="false"
      />
      <div className="mx-auto flex w-fit items-center gap-1.5 rounded-full bg-green px-3 py-0.5">
        <img src={icStar} alt="Rating" width={12} height={12} />
        <p className="text-[10px] font-semibold text-green-dark">
          {data.rating}
        </p>
      </div>
    </div>
    <div className="w-[301px]">
      <p className="mb-3.5 w-fit rounded-full bg-green px-5 py-2.5 text-sm font-semibold leading-[0.64] text-green-dark">
        {data.package}
      </p>
      <h6 className="font-kufam text-2xl font-semibold leading-[1.5] text-black-title">
        {data.user.name}
      </h6>
      <p className="text-sm font-medium leading-[1.5] text-black-content">
        {data.testimoni}
      </p>
    </div>
  </div>
);

CardTestimoni.propTypes = {
  data: PropTypes.object,
};

export default CardTestimoni;
