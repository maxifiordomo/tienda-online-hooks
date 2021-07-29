import React, { useContext, } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/DataProvider'

const ProductoItem = ({ id, title, price, image, category }) => {

    const value = useContext(DataContext)

    const addCart = value.addCarrito;

    return (
        <div>
            <div className="producto">
                <Link to={`/producto/${id}`}>
                    <div className="producto__img">
                        <img src={image.default} alt={title} />
                    </div>
                </Link>
                <div className="producto__footer">
                    <h1>{title}</h1>
                    <p>{category}</p>
                    <p className="price">${price}</p>
                </div>
                <div className="button">
                    <button className="btn" onClick={() => addCart(id)}>
                        Añadir al carrito
                    </button>
                    <div>
                        <Link to={`/producto/${id}`} className="btn">Vista</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductoItem
