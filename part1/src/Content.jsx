import React from "react";

const Content = ({ list }) => {
  return (
    <>
      {list.map((item) => (
        <p>
          {item[0]} {item[1]}
        </p>
      ))}
    </>
  );
};

export default Content;
