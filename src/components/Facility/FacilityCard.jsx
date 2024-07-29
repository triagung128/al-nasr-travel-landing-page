import PropTypes from "prop-types";

const FacilityCard = ({ item }) => (
  <div className="flex items-start gap-5 rounded-[10px] bg-white p-5 shadow-[0_4px_12px_0_rgba(0,0,0,0.12)]">
    <img src={item.logo} alt={item.name} />
    <div>
      <p className="font-kufam text-xl font-semibold leading-[1.5] text-black-title">
        {item.name}
      </p>
      <p className="text-sm font-medium leading-[1.5] text-black-content">
        {item.desc}
      </p>
    </div>
  </div>
);

FacilityCard.propTypes = {
  item: PropTypes.object,
};

export default FacilityCard;
