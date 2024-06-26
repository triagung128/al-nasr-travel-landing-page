import Button from "./Button";
import ImageHero from "./ImageHero";
import SubTitle from "./SubTitle";
import Title from "./Title";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-10 pb-20 pt-10 lg:flex-row lg:gap-1.5 lg:pb-24 lg:pt-20 xl:justify-between">
        <div>
          <p className="mb-7 w-fit rounded-full bg-green px-7 py-3.5 text-base font-medium leading-[0.64] text-green-dark xl:mb-9 xl:px-10 xl:text-2xl xl:leading-[0.64]">
            No. 1 in Indonesia
          </p>
          <Title className="mb-4 lg:max-w-[350px] xl:max-w-[527px]">
            Make it easy for your Umrah worship with Al Nasr Travel
          </Title>
          <SubTitle className="mb-8 lg:max-w-[450px] xl:max-w-[645px]">
            Facilitate your Umrah pilgrimage with us, we already have hundreds
            of thousands of customers, you can go for Umrah to Mecca and Medina
          </SubTitle>
          <Button>Contact us</Button>
        </div>
        <ImageHero />
      </div>
    </section>
  );
};

export default Hero;
