import Logo from "/logo_bg.png";

const FooterLogo = () => (
  <div className="shrink-0">
    <a href="">
      <img
        src={Logo}
        alt="Logo Text"
        className="mb-3.5"
        width={302}
        height={88}
      />
    </a>
    <p className="w-[294px] text-base font-semibold text-white">
      Comfortable and Quiet Worship, Our Service No. 1 in Indonesia
    </p>
  </div>
);

export default FooterLogo;
