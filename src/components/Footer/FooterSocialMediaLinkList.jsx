import PropTypes from "prop-types";

const FooterSocialMediaLinkList = ({ data }) => (
  <div className="flex space-x-[11px]">
    {data.map((item, index) => (
      <a href={item.href} key={index}>
        <img src={item.icon} alt={item.alt} />
      </a>
    ))}
  </div>
);

FooterSocialMediaLinkList.propTypes = {
  data: PropTypes.array,
};

export default FooterSocialMediaLinkList;
