import CartIcon from "../CartIcon/CartIcon";
import {link} from "react-router-dom";
export default function Navbar() {
    
    const headerStyles = {
        display: "flex",
        flexWrap: "wrap",
        jusifyContent: "space-between",
        listStyle: "none"
    }
    return (
        <header className="header">
            <div className="nombre">
                SKZ
            </div>
            <ul className="links" style={headerStyles}>
                <li to="/" className="btnNav">Inicio</li>
                <li to="/Productos/" className="btnNav">Productos</li>
                <li to="Quienes somos" className="btnNav">Quienes somos</li>
            </ul>
            <CartIcon count={0}/>
            
        </header>
    );
}