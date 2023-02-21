import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error from "./components/Error.jsx";
import Publi from "./components/Publi";



function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />}/>
        <Route path={"/category/:id"} element={<ItemListContainer />}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
        <Route path={"*"} element={<Error/>}/>
      </Routes>
      <Publi />
      <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
