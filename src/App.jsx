import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error from "./components/Error.jsx";
import Publi from "./components/Publi";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Thankyou from "./components/Thankyou";



function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />}/>
        <Route path={"/category/:id"} element={<ItemListContainer />}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
        <Route path={"/cart"} element={<Cart/>}/>
        <Route path={"/checkout"} element={<Checkout/>}/>
        <Route path={"/thankyou/:orderID"} element={<Thankyou/>}/>
        <Route path={"*"} element={<Error/>}/>
      </Routes>
      <Publi />
      <Footer />
    </div>
    </BrowserRouter>
    </CartContextProvider>
    
  );
}

export default App;
