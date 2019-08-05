import React, { useContext } from "react";
import CounterContext from "./../../contexts/couter";

const Footer = () => {
  const context = useContext(CounterContext);

  return <h2>Footer {context.counter}</h2>;
};

export default Footer;
