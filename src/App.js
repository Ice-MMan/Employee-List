import React, { useState } from "react";
import Button from "./components/button/Button";
import Cards from "./components/card/Card";
import data from "./data";
import "./components/card/Card.css";

function App() {
  return (
    <>
      <div className="container text-center bg-white">
        <h1>Employee List</h1>
        <h4>
          (Employess {1} to {5})
        </h4>
        {data.slice(0, 5).map((item) => {
          return <Cards {...item} key={item.id} />;
        })}
        <Button />
      </div>
    </>
  );
}

export default App;
