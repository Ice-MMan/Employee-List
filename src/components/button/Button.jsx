import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Button = () => {
  return (
    <div className="">
      <span>
        <FaChevronLeft className="fs-3 text-success" />
        Prev
      </span>
      <span>
        Next
        <FaChevronRight className="fs-3 text-success" />
      </span>
    </div>
  );
};

export default Button;
