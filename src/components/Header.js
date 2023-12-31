import "./Header.css";
import logo from "../assets/logo.png";
import {Link, NavLink} from "react-router-dom";



export const Header = () => {
  return (
    <header>
     
        <Link to="/" className="logo" >
        <img src={logo} alt="eshop logo"/>
        <span>EShop</span>
        </Link>
     
        <nav className="navigation"> 
        <NavLink to="/" end className="link">Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
        </nav>
        <Link to="/cart" className="items">cart:2</Link>
     
    </header>
  )
}
