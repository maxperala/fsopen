import { useState } from "react";

let jaffa = [];
for (let i = 0; i < 8; i++) {
  jaffa.push(0);
}

const App = (randint) => {
  const anek = {
    anecdotes: [
      "If it hurts, do it more often.",
      "Adding manpower to a late software project makes it later!",
      "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      "Premature optimization is the root of all evil.",
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
      "The only way to go fast, is to go well.",
    ],
    painallukset: jaffa,
  };

  const [selected, setSelected] = useState(0);
  const [turha, refresh] = useState(0);

  return (
    <div>
      <p>{anek.anecdotes[selected]}</p>
      <Votes olio={anek} index={selected} />

      <div>
        <Button
          function={() => {
            setSelected(Math.trunc(Math.random() * 8));
          }}
          text="Uusi!"
        />
        <Button
          function={() => {
            let pain = anek.painallukset;
            pain[selected] += 1;
            anek.painallukset = pain;
            refresh(turha + 1);
          }}
          text="Tykkää"
        />
      </div>
      <MostVoted olio={anek} />
    </div>
  );
};

const Button = (args) => {
  return <button onClick={args.function}>{args.text}</button>;
};

const Votes = (args) => {
  if (args.olio.painallukset[args.index] > 0)
    return <p>has {args.olio.painallukset[args.index]} votes</p>;
  else return <p>Not reviewed yet</p>;
};

const MostVoted = (args) => {
  const lista = args.olio.painallukset;
  let tyhja = true;

  const returnIndex = (lista) => {
    let max = lista[0];
    let maxIndex = 0;

    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > max) {
        maxIndex = i;
        max = lista[i];
      }
    }
    return maxIndex;
  };

  for (let i of lista) {
    if (lista[i] !== 0) {
      tyhja = false;
    }
  }

  if (tyhja) {
    return <h1>Nothing liked yet!</h1>;
  } else {
    return (
      <div>
        <h1>Anecdote with the most votes</h1>
        <p>
          {args.olio.anecdotes[returnIndex(lista)]} has{" "}
          {lista[returnIndex(lista)]} votes{" "}
        </p>
      </div>
    );
  }
};

export default App;
