import { testimoniData } from "../../data/testimoni-data";
import Container from "../ui/Container";
import TestimoniContent from "./TestimoniContent";

const Testimoni = () => (
  <section className="py-[90px]">
    <Container>
      <TestimoniContent data={testimoniData} />
    </Container>
  </section>
);

export default Testimoni;
