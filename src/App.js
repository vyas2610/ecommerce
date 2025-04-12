import React from "react";
import ProductPage from "./layouts/ProductPage";

import ProData from "./layouts/data";
const App = () => {
  return (
    <>
      <div className="header">
        <h1>Products | Page</h1>
      </div>
      <div className="main">
        {ProData.map((Data) => {
          return (
            <ProductPage
              prosrc={Data.prosrc}
              proname={Data.proname}
              prodesc={Data.prodesc}
            />
          );
        })}
      </div>
      <div className="header1">
        <p>Design & Developed By Deepak Vyas</p>
      </div>
    </>
  );
};

export default App;
