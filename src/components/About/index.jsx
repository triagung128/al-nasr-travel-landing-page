import Container from "../ui/Container";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

const About = () => (
  <section className="bg-[#F3FFFE] pb-24 pt-20 lg:pb-[120px] lg:pt-[100px]">
    <Container>
      <div className="flex flex-col gap-9 lg:flex-row lg:items-center lg:gap-[54px]">
        <AboutImage />
        <AboutContent />
      </div>
    </Container>
  </section>
);

export default About;
