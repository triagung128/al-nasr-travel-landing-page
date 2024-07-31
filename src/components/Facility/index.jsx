import { facilityData } from "../../data/facility-data";
import Container from "../ui/Container";
import FacilityContent from "./FacilityContent";

const Facility = () => (
  <section id="facilities" className="scroll-mt-24 bg-[#F3FFFE] py-[90px]">
    <Container>
      <FacilityContent data={facilityData} />
    </Container>
  </section>
);

export default Facility;
