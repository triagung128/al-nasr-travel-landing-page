import SubTitle from "../ui/SubTitle";
import Title from "../ui/Title";
import imgGallery1 from "/images/gallery/img_gallery_1.png";
import imgGallery2 from "/images/gallery/img_gallery_2.png";
import imgGallery3 from "/images/gallery/img_gallery_3.png";
import imgGallery4 from "/images/gallery/img_gallery_4.png";
import imgGallery5 from "/images/gallery/img_gallery_5.png";

const GalleryContent = () => (
  <>
    <Title className="mb-2.5 text-center">
      Gallery Footage In Saudi Arabia
    </Title>
    <SubTitle className="mx-auto mb-[70px] text-center xl:w-[660px]">
      We provide comfort for our customers, with the various facilities we
      provide that we provide
    </SubTitle>
    <div className="grid gap-y-4 sm:grid-cols-[minmax(0,_1.6fr)_repeat(2,_minmax(0,_1fr))] sm:gap-4 lg:gap-6">
      <img
        src={imgGallery1}
        alt="Gallery 1"
        className="row-span-2 h-full w-full bg-center object-cover shadow-lg"
      />
      <img
        src={imgGallery2}
        alt="Gallery 2"
        className="h-full w-full bg-center object-cover shadow-lg"
      />
      <img
        src={imgGallery3}
        alt="Gallery 3"
        className="h-full w-full bg-center object-cover shadow-lg"
      />
      <img
        src={imgGallery4}
        alt="Gallery 4"
        className="h-full w-full bg-center object-cover shadow-lg"
      />
      <img
        src={imgGallery5}
        alt="Gallery 5"
        className="h-full w-full bg-center object-cover shadow-lg"
      />
    </div>
  </>
);

export default GalleryContent;
