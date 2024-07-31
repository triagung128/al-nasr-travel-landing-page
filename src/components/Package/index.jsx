import { airwaysData } from "../../data/package-data";
import { packageData } from "../../data/package-data";
import Container from "../ui/Container";
import PackageAirwaysContent from "./PackageAirwaysContent";
import PackageContent from "./PackageContent";

const Package = () => (
  <section id="package" className="scroll-mt-24 py-[78px]">
    <Container>
      <PackageContent data={packageData} />
      <PackageAirwaysContent data={airwaysData} />
    </Container>
  </section>
);

export default Package;
