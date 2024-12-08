import React from "react";
import Part from "./Part.jsx";
const Content = ({ parts }) => {
  return (
    <>
      {parts.map((item) => (
        <Part data={item}></Part>
      ))}
    </>
  );
};

export default Content;
