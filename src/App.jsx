import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";

import { AuthProvider } from "./context/AuthContext"; 
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ProductFormContainer from "./components/Form/ProductFormContainer/ProductFormContainer.jsx";

function App() {
  return (
    <AuthProvider>       
      <BrowserRouter>
        <CartProvider>

          <Nav />

          <Routes>
            {/* Home */}
            <Route path="/" element={<ItemListContainer />} />

            {/* Categorías */}
            <Route path="/category/:categoryId" element={<ItemListContainer />} />

            {/* Detalle */}
            <Route path="/detail/:id" element={<ItemDetailContainer />} />

            {/* Carrito */}
            <Route path="/cart" element={<Cart />} />

            {/* Login */}
            <Route path="/login" element={<Login />} />

            {/* Admin protegido */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <ProductFormContainer />
                </ProtectedRoute>
              }
            />
          </Routes>

        </CartProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
