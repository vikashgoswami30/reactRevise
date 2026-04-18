import Card from "./components/Card";

function App() {
  let myObj = {
    userName: "Vikash Goswami",
    age: 25,
  };  
  let newArr= [1,2,3];
  return (
    <>
      <h1 className="bg-red-900 rounded-lg text-lg flex">tailwind test</h1>

      <br />
      <div className="flex gap-4">
        <Card userName="VikashGoswami" price="300" articleNo="0001" btnText="Buy" someObj={myObj}/>
        <Card userName="Aashu" price="100" articleNo="0002" btnText="Visit" someArr={newArr}/>
        <Card userName="Foji" price="200" articleNo="0005" btnText="Inquery"/>
        <Card userName="Sunar" price="400"  articleNo="0004" btnText="Details"/>
      </div>
    </>
  );
}

export default App;
