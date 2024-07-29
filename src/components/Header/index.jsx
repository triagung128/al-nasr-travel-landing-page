import Hero from "../Hero";
import Navbar from "../Navbar";
import Container from "../ui/Container";

const Header = () => (
  <header className="relative inline">
    <div className="absolute inset-x-0 -top-16 bottom-0 -z-10 bg-gradient-to-b from-[#FFCE83]/[0] to-[#FFC265]/[0.05]" />
    <Navbar />
    <Container>
      <Hero />
    </Container>
  </header>
);

export default Header;
