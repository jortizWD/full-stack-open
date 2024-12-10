import { useState } from "react";

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td> <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  return (
    <table>
      <tbody>
        <StatisticLine text={"Good"} value={good} />
        <StatisticLine text={"Neutral"} value={neutral} />
        <StatisticLine text={"Bad"} value={bad} />
        <StatisticLine text={"All"} value={total} />
        <StatisticLine text={"Avarge"} value={(good - bad) / total} />
        <StatisticLine text={"Positive"} value={`${(100 * good) / total} %`} />
      </tbody>
    </table>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good + 1)}>Good</Button>
      <Button onClick={() => setNeutral(neutral + 1)}>Neutral</Button>
      <Button onClick={() => setBad(bad + 1)}>Bad</Button>
      <h1>Statistics</h1>
      {Boolean(good || neutral || bad) ? (
        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      ) : (
        <p>No Feeback given</p>
      )}
    </div>
  );
};

export default App;
