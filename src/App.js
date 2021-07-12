import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";

import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
