import PropTypes from "prop-types";

const FacilityCardItem = ({ item }) => (
  <div className="flex items-start gap-5 rounded-[10px] bg-white p-5 shadow-[0_4px_12px_0_rgba(0,0,0,0.12)]">
    <img src={item.logo} alt={item.name} width={36} height={36} />
    <div>
      <p className="font-kufam text-xl font-semibold leading-normal text-black-title">
        {item.name}
      </p>
      <p className="text-sm font-medium leading-normal text-black-content">
        {item.desc}
      </p>
    </div>
  </div>
);

FacilityCardItem.propTypes = {
  item: PropTypes.object,
};

export default FacilityCardItem;
