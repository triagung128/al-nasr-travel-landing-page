import PropTypes from "prop-types";

const CardPackage = ({ packageItem }) => (
  <div className="w-full rounded-[10px] bg-white py-7 shadow-[0_4px_20px_0_rgba(29,165,153,0.15)]">
    <p className="px-[26px]">
      <img
        src={packageItem.image}
        alt={packageItem.name}
        className="max-w-full object-cover"
      />
    </p>
    <div className="mb-5 mt-4 flex items-center justify-between pl-[26px]">
      <p className="text-base font-bold leading-[1.5] text-orange">
        {packageItem.type}
      </p>
      <p className="rounded-s-full bg-green px-[30px] py-[10px] text-base font-bold leading-[1.5] text-green-dark">
        {packageItem.category}
      </p>
    </div>
    <div className="px-[26px]">
      <p className="mb-[9px] font-kufam text-base font-bold leading-[1.4] text-black-title">
        {packageItem.name}
      </p>
      <p className="mb-5 font-kufam text-xl font-bold leading-[1.4] text-black-title">
        $ {packageItem.price} /<span className="text-green-dark">person</span>
      </p>
      <div className="mb-5 flex flex-wrap gap-5 sm:gap-3 lg:gap-5">
        {packageItem.facilities.map((facility, index) => (
          <img key={index} src={facility.icon} alt={facility.name} />
        ))}
      </div>
      <button className="cursor-pointer rounded-[5px] border border-orange bg-white px-[30px] py-4 text-xs font-semibold leading-[0.64] text-orange">
        View Detail
      </button>
    </div>
  </div>
);

CardPackage.propTypes = {
  packageItem: PropTypes.object,
};

export default CardPackage;
