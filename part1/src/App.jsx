import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Content from "./Content.jsx";

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course}></Header>
      <Content list={[part1, part2, part3]}></Content>
      <Footer
        total={part1.exercises + part2.exercises + part3.exercises}
      ></Footer>
    </div>
  );
};

export default App;
