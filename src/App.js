import React, { useState } from "react";
// import Button from "./components/button/Button";
import Cards from "./components/card/Card";
import data from "./data";
import "./components/card/Card.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);
  const prev = () => {
    if (count > 0) setCount(count - 5);
    if (count < 4) setCount(15);
  };

  const next = () => {
    if (count < 15) setCount(count + 5);
    if (count > 14) setCount(0);
  };

  return (
    <>
      <div className="container text-center bg-white">
        <h1>Employee List</h1>
        <h4>
          (Employess {count + 1} to {count + 5})
        </h4>
        {data.slice(count, count + 5).map((item) => {
          return <Cards {...item} key={item.id} />;
        })}
        <div className="button-style">
          <span onClick={prev} className="mx-3 fs-4 ">
            <FaChevronLeft className="fs-3 text-success " />
            Prev
          </span>
          <span onClick={next} className="mx-3 fs-4">
            Next
            <FaChevronRight className="fs-3 text-success" />
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
