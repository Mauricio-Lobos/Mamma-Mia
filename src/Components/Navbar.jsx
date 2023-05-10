import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Context } from "../Context"

export default function Navbar() {
    const { calculatedPrice } = useContext(Context);
    return (
        <nav className="nav">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : "not-active"}> Pizzeria Mamma Mia!</NavLink>
            <NavLink to="/carrito" className={({ isActive }) => isActive ? "active" : "not-active"}> 🛒 ${calculatedPrice}</NavLink>
        </nav>
    )
}