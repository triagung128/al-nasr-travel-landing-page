import { galleryData } from "../../data/gallery-data";
import Container from "../ui/Container";
import GalleryContent from "./GalleryContent";

const Gallery = () => (
  <section
    id="gallery"
    className="scroll-mt-24 bg-[#F3FFFE] pb-[100px] pt-[70px]"
  >
    <Container>
      <GalleryContent data={galleryData} />
    </Container>
  </section>
);

export default Gallery;
