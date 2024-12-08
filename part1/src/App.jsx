import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Content from "./Content.jsx";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course}></Header>
      <Content
        list={[
          [part1, exercises1],
          [part2, exercises2],
          [part3, exercises3],
        ]}
      ></Content>
      <Footer total={exercises1 + exercises2 + exercises3}></Footer>
    </div>
  );
};

export default App;
