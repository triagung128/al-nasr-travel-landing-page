import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="flex flex-col items-center gap-14 pb-24 pt-14 xl:flex-row xl:justify-between xl:gap-1.5 xl:pt-20">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
