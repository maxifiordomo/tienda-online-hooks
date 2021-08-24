import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'

const Cart = () => {

    const value = useContext(DataContext)

    const [menu, setMenu] = value.menu
    const [addCart, setAddCart] = value.addCart
    const [total] = value.total;

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    const resta = (id) => {
        // eslint-disable-next-line
        addCart.map(item => {
            if (item.id === id) {
                item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1;
            }
            setAddCart([...addCart])
        })
    }

    const suma = (id) => {
        // eslint-disable-next-line
        addCart.map(item => {
            if (item.id === id) {
                item.cantidad += 1
            }
            setAddCart([...addCart])
        })
    }

    const toggleFalse = () => {
        setMenu(false)
    }

    const removeProduct = (id) => {
        if (window.confirm("¿Quieres suspender el producto?")) {
            // eslint-disable-next-line
            addCart.map((item, index) => {
                if (item.id === id) {
                    item.cantidad = 1;
                    addCart.splice(index, 1)
                }
            })
        }
        setAddCart([...addCart])
    }

    return (
        <div className={show1}>
            <div className={show2}>
                <div onClick={() => toggleFalse()}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su carrito</h2>
                <div className="carrito_center">
                    ? {
                        addCart.length === 0 ? <h2 style={{
                            textAlign: "center", fontSize: "3rem"
                        }}>Carrito Vacio</h2> : <>
                            {
                                addCart.map(product => (
                                    <div className="carrito__item" key={product.id}>
                                        <img src={product.image.default} alt={product.title} />
                                        <div>
                                            <h3>{product.title}</h3>
                                            <p className="price">${product.price}</p>
                                        </div>
                                        <div>
                                            <box-icon name="up-arrow" type="solid" onClick={() => suma(product.id)}></box-icon>
                                            <p className="cantidad">{product.cantidad}</p>
                                            <box-icon name="down-arrow" type="solid" onClick={() => resta(product.id)}></box-icon>
                                        </div>
                                        <div className="remove__item" onClick={() => removeProduct(product.id)}>
                                            <box-icon name="trash"></box-icon>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    }
                </div>
                <div className="carrito__footer">
                    <h3>${total}</h3>
                    <button className="btn">Payment</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
