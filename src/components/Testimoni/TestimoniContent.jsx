import SubTitle from "../ui/SubTitle";
import Title from "../ui/Title";
import TestimoniCardContainer from "./TestimoniCardContainer";
import ImgUser1 from "/images/testimoni/img_testimoni_photo_user_1.png";
import ImgUser2 from "/images/testimoni/img_testimoni_photo_user_2.png";
import ImgUser3 from "/images/testimoni/img_testimoni_photo_user_3.png";
import ImgUser4 from "/images/testimoni/img_testimoni_photo_user_4.png";
import ImgUser5 from "/images/testimoni/img_testimoni_photo_user_5.png";
import ImgUser6 from "/images/testimoni/img_testimoni_photo_user_6.png";

const testimoniList1 = [
  {
    user: {
      name: "Abd Al Jami'ah",
      imageProfile: ImgUser1,
    },
    package: "Al Nasr Umrah",
    testimoni:
      "I am very satisfied with Al Nasr Travels service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
    rating: 4.9,
  },
  {
    user: {
      name: "Humaira Khaira",
      imageProfile: ImgUser2,
    },
    package: "Al Nasr Umrah",
    testimoni:
      "I am very satisfied with Al Nasr Travels service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
    rating: 4.9,
  },
  {
    user: {
      name: "Hubi Khairuddin",
      imageProfile: ImgUser3,
    },
    package: "Al Nasr Umrah",
    testimoni:
      "I am very satisfied with Al Nasr Travels service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
    rating: 4.9,
  },
];

const testimoniList2 = [
  {
    user: {
      name: "Ray Gunawan",
      imageProfile: ImgUser4,
    },
    package: "Al Nasr Umrah",
    testimoni:
      "I am very satisfied with Al Nasr Travels service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
    rating: 4.9,
  },
  {
    user: {
      name: "Indra Pratama",
      imageProfile: ImgUser5,
    },
    package: "Al Nasr Umrah",
    testimoni:
      "I am very satisfied with Al Nasr Travels service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
    rating: 4.9,
  },
  {
    user: {
      name: "Rahmat Hidayat",
      imageProfile: ImgUser6,
    },
    package: "Al Nasr Umrah",
    testimoni:
      "I am very satisfied with Al Nasr Travels service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
    rating: 4.9,
  },
];

const TestimoniContent = () => {
  return (
    <>
      <Title className="ml-auto text-end md:w-[400px] xl:w-[550px]">
        Testimonials from our customers
      </Title>
      <SubTitle className="mb-10 ml-auto text-end md:w-[450px] xl:w-[600px]">
        We have 100.000+ customers, here are our customer testimonials
      </SubTitle>
      <TestimoniCardContainer data={testimoniList1} />
      <TestimoniCardContainer data={testimoniList2} isReversed={true} />
    </>
  );
};

export default TestimoniContent;
