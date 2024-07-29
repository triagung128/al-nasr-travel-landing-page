import IcFacebook from "/icons/ic_facebook.svg";
import IcInstagram from "/icons/ic_instagram.svg";
import IcTwitter from "/icons/ic_twitter.svg";
import IcYoutube from "/icons/ic_youtube.svg";
import Logo from "/logo_bg.png";

const footerLinkList = [
  {
    title: "Quick Link",
    links: [
      {
        href: "",
        name: "About Us",
      },
      {
        href: "",
        name: "Flight Accommodation",
      },
      {
        href: "",
        name: "Facilities",
      },
      {
        href: "",
        name: "Gallery",
      },
    ],
  },
  {
    title: "Package Umrah",
    links: [
      {
        href: "",
        name: "Al Nasr Umrah Bronze",
      },
      {
        href: "",
        name: "Al Nasr Umrah Silver",
      },
      {
        href: "",
        name: "Al Nasr Umrah Gold",
      },
      {
        href: "",
        name: "Al Nasr Umrah Priority",
      },
    ],
  },
  {
    title: "Package Hajj",
    links: [
      {
        href: "",
        name: "Al Nasr Hajj Diamond",
      },
      {
        href: "",
        name: "Al Nasr Hajj Platinum",
      },
      {
        href: "",
        name: "Al Nasr Hajj Priority",
      },
    ],
  },
  {
    title: "Office Place",
    links: [
      {
        href: "",
        name: "Indonesia",
      },
      {
        href: "",
        name: "Saudi Arabia",
      },
      {
        href: "",
        name: "Uni Emirates Arab",
      },
    ],
  },
];

const FooterContent = () => (
  <div>
    <div className="flex flex-col gap-x-[49px] gap-y-8 lg:flex-row">
      <div className="w-[294px] shrink-0">
        <img src={Logo} alt="Logo Text" className="mb-3.5" />
        <p className="text-base font-semibold text-white">
          Comfortable and Quiet Worship, Our Service No. 1 in Indonesia
        </p>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-8">
        {footerLinkList.map((data, index) => (
          <div key={index} className="w-[217px]">
            <h6 className="mb-5 text-2xl font-bold text-white">{data.title}</h6>
            <div className="flex flex-col space-y-2.5">
              {data.links.map((link, index) => (
                <a key={index} href={link.href} className="text-xl text-white">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <hr className="my-[25px]" />
    <div className="flex flex-wrap items-center justify-between gap-4">
      <p className="text-base text-white">
        Copyright © 2006 - 2024 Al Nasr Travel | All Reserverd
      </p>
      <div className="flex space-x-[11px]">
        <a href="">
          <img src={IcInstagram} alt="ic_ig" />
        </a>
        <a href="">
          <img src={IcFacebook} alt="ic_fb" />
        </a>
        <a href="">
          <img src={IcTwitter} alt="ic_tw" />
        </a>
        <a href="">
          <img src={IcYoutube} alt="ic_yt" />
        </a>
      </div>
    </div>
  </div>
);

export default FooterContent;
