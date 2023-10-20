import Card from "./components/Card";
import students from "./students";

const App = () => {
  return (
    <div>
      <h1 className="heading">Full Stack Students</h1>
      <Card
        name={students[0].name}
        img={students[0].imgURL}
        tel={students[0].phone}
        email={students[0].email}
      />
      <Card
        name={students[1].name}
        img={students[1].imgURL}
        tel={students[1].phone}
        email={students[1].email}
      />
      <Card
        name={students[2].name}
        img={students[2].imgURL}
        tel={students[2].phone}
        email={students[2].email}
      />
      <Card
        name={students[3].name}
        img={students[3].imgURL}
        tel={students[3].phone}
        email={students[3].email}
      />

      <Card
        name={students[4].name}
        img={students[4].imgURL}
        tel={students[4].phone}
        email={students[4].email}
      />

      <Card
        name={students[5].name}
        img={students[5].imgURL}
        tel={students[5].phone}
        email={students[5].email}
      />
    </div>
  );
};

export default App;
