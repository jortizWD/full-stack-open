import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Content from "./Content.jsx";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts}></Content>
      <Footer parts={parts}></Footer>
    </div>
  );
};

export default App;
