import PropTypes from "prop-types";

const FooterLinkList = ({ data }) => (
  <div className="flex flex-wrap gap-x-5 gap-y-8">
    {data.map((data, index) => (
      <div key={index} className="w-[217px]">
        <p className="mb-5 text-2xl font-bold text-white">{data.label}</p>
        <div className="flex flex-col space-y-2.5">
          {data.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-xl text-white hover:underline hover:underline-offset-4"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    ))}
  </div>
);

FooterLinkList.propTypes = {
  data: PropTypes.array,
};

export default FooterLinkList;
