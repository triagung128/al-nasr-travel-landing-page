import PropTypes from "prop-types";

import FooterLinkList from "./FooterLinkList";
import FooterLogo from "./FooterLogo";
import FooterSocialMediaLinkList from "./FooterSocialMediaLinkList";

const FooterContent = ({ dataLinks }) => (
  <div>
    <div className="flex flex-col gap-x-[49px] gap-y-8 lg:flex-row">
      <FooterLogo />
      <FooterLinkList data={dataLinks.footerLinks} />
    </div>
    <hr className="my-[25px]" />
    <div className="flex flex-wrap items-center justify-between gap-4">
      <p className="text-base text-white">
        Copyright © 2006 - 2024 Al Nasr Travel | All Reserverd
      </p>
      <FooterSocialMediaLinkList data={dataLinks.socialMediaLinks} />
    </div>
  </div>
);

FooterContent.propTypes = {
  dataLinks: PropTypes.object,
};

export default FooterContent;
