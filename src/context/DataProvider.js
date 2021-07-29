import React, { useState, useEffect, createContext } from "react";
import Data from '../Data.js'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([]);
    const [menu, setMenu] = useState(false);
    const [addCart, setAddCart] = useState([]);
    const [total, setTotal] = useState(0)

    const addCarrito = (id) => {
        const check = addCart.every(item => {
            return item.id !== id;
        })
        if (check) {
            const data = productos.filter(producto => {
                return producto.id === id
            })
            setAddCart([...addCart, ...data])
        } else {
            alert("El producto ya habia sido agregado")
        }
    }

    useEffect(() => {

        const producto = Data.items
        if (producto) {
            setProductos(producto)
        } else {
            setProductos([])
        }

    }, [])

    useEffect(() => {
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
        if (dataCarrito) {
            setAddCart(dataCarrito)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('dataCarrito', JSON.stringify(addCart))
    }, [addCart])

    useEffect(() => {
        const getTotal = () => {
            const res = addCart.reduce((prev, item) => {
                return prev + (item.price * item.cantidad)
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [addCart])

    const value = {
        productos: [productos],
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        addCart: [addCart, setAddCart],
        total: [total, setTotal]
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
