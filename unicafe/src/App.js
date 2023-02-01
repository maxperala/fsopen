import { useState } from "react";

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header />
      <Button text="good" function={() => setGood(good + 1)} />
      <Button text="neutral" function={() => setNeutral(neutral + 1)} />
      <Button text="bad" function={() => setBad(bad + 1)} />

      <h1>statistics:</h1>

      <Statistics stats={[good, neutral, bad]} />
    </div>
  );
};

const Header = () => <h1>give feedback</h1>;

const Button = (args) => {
  return <button onClick={args.function}>{args.text}</button>;
};
const StatisticLine = (args) => {
  return (
    <tr>
      <td>{args.scale}</td>
      <td>{args.count}</td>
    </tr>
  );
};

const Statistics = (args) => {
  let [good, neutral, bad] = args.stats;
  // console.log(good, neutral, bad);

  if (good + neutral + bad !== 0) {
    return (
      <table>
        <tbody>
          <StatisticLine scale="good" count={good} />
          <StatisticLine scale="neutral" count={neutral} />
          <StatisticLine scale="bad" count={bad} />
          <StatisticLine scale="all" count={good + neutral + bad} />
          <StatisticLine
            scale="average"
            count={(good * 1 + bad * -1) / (good + bad + neutral) || 0}
          />
          <StatisticLine
            scale="postive"
            count={`${good / (neutral + bad + good) || 0} %`}
          />
        </tbody>
      </table>
    );
  } else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
};

export default App;
