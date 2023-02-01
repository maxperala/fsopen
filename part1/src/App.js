const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content tiedot={course} />
      <Total luku={course} />
    </div>
  );
};

const Header = function (props) {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};

const Content = function (props) {
  return (
    <div>
      <Part
        nimi={props.tiedot.parts[0].name}
        tehtavat={props.tiedot.parts[0].exercises}
      />
      <Part
        nimi={props.tiedot.parts[1].name}
        tehtavat={props.tiedot.parts[1].exercises}
      />
      <Part
        nimi={props.tiedot.parts[2].name}
        tehtavat={props.tiedot.parts[2].exercises}
      />
    </div>
  );
};

const Part = function (props) {
  return (
    <>
      <p>
        {props.nimi} {props.tehtavat}
      </p>
    </>
  );
};

const Total = function (props) {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.luku.parts[0].exercises +
          props.luku.parts[1].exercises +
          props.luku.parts[2].exercises}
      </p>
    </div>
  );
};

export default App;
