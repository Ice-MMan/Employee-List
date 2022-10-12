import React from "react";

const Cards = ({ id, name, age, image, email }) => {
  return (
    <>
      <h1></h1>
      <img src={image} alt="" />
      <div>{name}</div>
      <div>{age}</div>
      <div>{email}</div>
    </>
  );
};

export default Cards;
