import React from "react";
import { Header } from "../components";
import Form from "../components/Form";
function Card() {
  return (
    <div className="wrapper">
      <Header />
      <div>
        <h1>Корзина</h1>
      </div>
      <Form />
    </div>
  );
}

export default Card;
