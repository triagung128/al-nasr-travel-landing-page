import { footerLink } from "../../data/footer-link";
import Container from "../ui/Container";
import FooterContent from "./FooterContent";

const Footer = () => (
  <footer className="bg-green-dark pb-7 pt-[60px]">
    <Container>
      <FooterContent dataLinks={footerLink} />
    </Container>
  </footer>
);

export default Footer;
