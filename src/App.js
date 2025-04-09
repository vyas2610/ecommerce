import React from "react";
import ProductPage from "./layouts/ProductPage";

const App = () => {
  return (
    <>
      <div className="header">
        <h1>Products | Page</h1>
      </div>
      <div className="main">
        <ProductPage />
        <ProductPage />
        <ProductPage />
        <ProductPage />
      </div>
      <div className="header1">
        <p>Design & Developed By Deepak Vyas</p>
      </div>
    </>
  );
};

export default App;
