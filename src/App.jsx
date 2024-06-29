import About from "./components/layouts/About";
import Facilities from "./components/layouts/Facilities";
import Footer from "./components/layouts/Footer";
import Gallery from "./components/layouts/Gallery";
import Header from "./components/layouts/Header";
import Package from "./components/layouts/Package";
import Testimoni from "./components/layouts/Testimoni";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Package />
        <Facilities />
        <Testimoni />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;
