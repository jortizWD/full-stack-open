import React from "react";
import Part from "./Part.jsx";
const Content = ({ list }) => {
  return (
    <>
      {list.map((item) => (
        <Part data={item}></Part>
      ))}
    </>
  );
};

export default Content;
