import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Las hamburguesas mas sabrosas"} />
      <Footer />
    </div>
  );
}

export default App;
