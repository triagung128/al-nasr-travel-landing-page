import Container from "../ui/Container";
import ContentAbout from "../ui/ContentAbout";
import ImageAbout from "../ui/ImageAbout";

const About = () => (
  <section className="bg-[#F3FFFE] pb-24 pt-20 lg:pb-[120px] lg:pt-[100px]">
    <Container>
      <div className="flex flex-col gap-9 lg:flex-row lg:items-center lg:gap-[54px]">
        <ImageAbout />
        <ContentAbout />
      </div>
    </Container>
  </section>
);

export default About;
