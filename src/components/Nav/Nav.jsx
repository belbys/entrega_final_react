import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/UseCartContext";
import "./Nav.css";

export const Nav = () => {
  const { getTotalItems } = useCartContext();   
  
  return (
    <nav className="navbar">
      <img src="/images/logo.png" alt="Planeta Creativo" className="logo-img" />
      <ul className="nav-list">
        <li> <Link to={"/"}>Home</Link> </li>
        <li> <Link to={"/category/stickers"}>Stickers</Link> </li>
        <li> <Link to={"/category/papeleria"}>Papeleria</Link> </li>
        <li> 
          <Link to="/cart">Carrito</Link>
          {getTotalItems() > 0 && (
            <span className="in-cart">{getTotalItems()}</span>
          )}
        </li>
      </ul>
    </nav>
  );
}