import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ProductFormContainer from "./components/Form/ProductFormContainer/ProductFormContainer.jsx";




function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/admin" element={<ProtectedRoute> <ProductFormContainer /></ProtectedRoute>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
