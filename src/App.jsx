import About from "./components/About";
import Facility from "./components/Facility";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Package from "./components/Package";
import Testimoni from "./components/Testimoni";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Package />
        <Facility />
        <Testimoni />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;
