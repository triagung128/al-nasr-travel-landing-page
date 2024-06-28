import imgUser1 from "../../assets/images/img_user_1_sq.png";
import imgUser2 from "../../assets/images/img_user_2_sq.png";
import imgUser3 from "../../assets/images/img_user_3_sq.png";
import imgUser4 from "../../assets/images/img_user_4_sq.png";
import imgUser5 from "../../assets/images/img_user_5_sq.png";
import imgUser6 from "../../assets/images/img_user_6_sq.png";
import CardTestimoniContainer from "./CardTestimoniContainer";
import SubTitle from "./SubTitle";
import Title from "./Title";

const testimoniList1 = [
  {
    user: {
      name: "Abd Al Jami'ah",
      imageProfile: imgUser1,
    },
    package: "Al Nasr Umrah",
    testimoni:
      "I am very satisfied with Al Nasr Travels service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
    rating: 4.9,
  },
  {
    user: {
      name: "Humaira Khaira",
      imageProfile: imgUser2,
    },
    package: "Al Nasr Umrah",
    testimoni:
      "I am very satisfied with Al Nasr Travels service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
    rating: 4.9,
  },
  {
    user: {
      name: "Hubi Khairuddin",
      imageProfile: imgUser3,
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
      imageProfile: imgUser4,
    },
    package: "Al Nasr Umrah",
    testimoni:
      "I am very satisfied with Al Nasr Travels service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
    rating: 4.9,
  },
  {
    user: {
      name: "Indra Pratama",
      imageProfile: imgUser5,
    },
    package: "Al Nasr Umrah",
    testimoni:
      "I am very satisfied with Al Nasr Travels service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
    rating: 4.9,
  },
  {
    user: {
      name: "Rahmat Hidayat",
      imageProfile: imgUser6,
    },
    package: "Al Nasr Umrah",
    testimoni:
      "I am very satisfied with Al Nasr Travels service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.",
    rating: 4.9,
  },
];

const ContentTestimoni = () => {
  return (
    <>
      <Title className="ml-auto text-end md:w-[400px] xl:w-[550px]">
        Testimonials from our customers
      </Title>
      <SubTitle className="mb-10 ml-auto text-end md:w-[450px] xl:w-[600px]">
        We have 100.000+ customers, here are our customer testimonials
      </SubTitle>
      <CardTestimoniContainer data={testimoniList1} />
      <CardTestimoniContainer data={testimoniList2} isReversed={true} />
    </>
  );
};

export default ContentTestimoni;
