import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header";

import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
