import React from "react";
import "./App.css";
import TopNav from "./components/top-nav/topNav";
import Header from "./components/header/header";
import AllProduct from "./components/content/product";
import store from "./store/masterData/store";
import { Provider } from "react-redux";
import TopProducts from "./components/content/topProducts";

function App() {
  return (
    <Provider store={store}>
      <TopNav />
      <Header />
      <AllProduct />
      {/* <TopProducts /> */}
    </Provider>
  );
}
//git config --global core.autocrlf false
export default App;
