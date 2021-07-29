import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"

import Header from './components/header/Header';
import 'boxicons';
import Routes from './components/Routes';
import { DataProvider } from "./context/DataProvider"
import Cart from './components/cart/Cart';



function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Cart />
          <Header />
          <Routes />
        </Router>
      </div>
    </DataProvider>

  );
}

export default App;
