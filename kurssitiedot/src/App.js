import { useState } from "react";

const Display = (params) => {
  return <h1>{params.counter}</h1>;
};

const Button = (params) => {
  return <button onClick={params.funktio}>{params.teksti}</button>;
};

const ListaNaytto = (params) => {
  let paluujono = params.klikit.join(" ");
  // for (let i of params.klikit) {
  //  paluujono += `${i}, `;
  //}

  if (paluujono.length !== 0) return <p>Button press History: {paluujono}</p>;
  else return <p>Press the buttons my guy.</p>;
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  //setTimeout(() => setCounter(counter + 1), 1000);
  const plusOneLeft = function () {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };
  const plusOneRight = function () {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };
  const reset = function () {
    setAll([]);
    setLeft(0);
    setRight(0);
  };

  return (
    <div>
      <ListaNaytto klikit={allClicks} />
      <Display counter={left} />
      <Display counter={right} />
      <Button funktio={plusOneLeft} teksti="Lisää"></Button>
      <Button funktio={plusOneRight} teksti="Lisää" />
      <Button funktio={reset} teksti="Resetoi"></Button>
    </div>
  );
};

export default App;
