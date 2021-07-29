import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Products from './products/Products'
import ProductsDetails from './products/ProductsDetails'

const Routes = () => {
    return (
        <section>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/productos" exact component={Products} />
                <Route path="/producto/:id" exact component={ProductsDetails} />
            </Switch>
        </section>
    )
}

export default Routes
