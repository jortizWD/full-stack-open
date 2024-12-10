import { useState } from "react";

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
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

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({});

  const getAnecdote = () => {
    setSelected(Math.round(Math.random() * (anecdotes.length - 1)));
  };

  const setVote = () => {
    setPoints((state) => ({
      ...state,
      [selected]: state[selected] ? state[selected] + 1 : 1,
    }));
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setNeutral(neutral + 1)}>Neutral</Button>
      <Button onClick={() => setBad(bad + 1)}>Bad</Button>
      <h1>Statistics</h1>
      {Boolean(good || neutral || bad) ? (
        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      ) : (
        <p>No Feeback given</p>
      )}
      <h1>Anecdotes</h1>
      <Button onClick={setVote}>Vote</Button>
      <Button onClick={getAnecdote}>Next Anecdote</Button>
      <p>{anecdotes[selected]}</p>
      <p>{points[selected]} Votes</p>
    </div>
  );
};

export default App;
