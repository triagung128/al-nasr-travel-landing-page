import Airways from "../Airways";
import Container from "../ui/Container";
import PackageContent from "./PackageContent";

const Package = () => (
  <section className="py-[78px]">
    <Container>
      <PackageContent />
      <Airways />
    </Container>
  </section>
);

export default Package;
