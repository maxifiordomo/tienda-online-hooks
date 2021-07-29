import React, { useContext } from 'react'
import Nike from '../../images/Nike.jpg'
import { Link } from "react-router-dom";
import { DataContext } from '../../context/DataProvider';


const Header = () => {

    const value = useContext(DataContext)

    const [menu, setMenu] = value.menu
    const [addCart] = value.addCart

    const toggleTrue = () => {
        setMenu(!menu)
    }

    return (
        <header>
            <Link to="/">
                <div className="logo">
                    <img src={Nike} alt="Logo" width="150" />
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/productos">Productos</Link>
                </li>
            </ul>
            <div className="cart" onClick={() => toggleTrue()}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{addCart.length}</span>
            </div>
        </header>
    )
}

export default Header
