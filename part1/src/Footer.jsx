import React from "react";

const Footer = ({ parts }) => {
  let total = 0;

  parts.forEach((item) => {
    total += item.exercises;
  });

  return <p>Number of exercises {total}</p>;
};

export default Footer;
