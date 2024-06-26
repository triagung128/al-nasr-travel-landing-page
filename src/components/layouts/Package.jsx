import Container from "../ui/Container";
import ContentAirways from "../ui/ContentAirways";
import ContentPackage from "../ui/ContentPackage";

const Package = () => (
  <section className="py-[78px]">
    <Container>
      <ContentPackage />
      <ContentAirways />
    </Container>
  </section>
);

export default Package;
