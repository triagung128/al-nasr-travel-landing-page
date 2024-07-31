import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="flex flex-col items-center gap-10 pb-20 pt-10 lg:flex-row lg:gap-1.5 lg:pb-24 lg:pt-20 xl:justify-between">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
