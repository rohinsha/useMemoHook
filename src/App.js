import "./styles.css";
//on clicking of add to do also, calculation function was executing so we have changed it now it will only execute if the count value changes or else always its cached value will be used.
import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const expensiveCal = (num) => {
    console.log("calculatin");
    for (let i = 0; i < 10000; i++) {
      num += 1;
    }
    return num;
  };

  //uncomment this below line to see how it works without usememo hook
  // const calculation=expensiveCal(count);
  const calculation = useMemo(() => expensiveCal(count), [count]);
  function increment() {
    console.log("incrementing the count");
    setCount((prev) => prev + 1);
  }
  const addTodos = () => {
    console.log("adding the todos");
    setTodos((prev) => [...prev, "new todo"]);
  };

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={() => increment()}>increment the count</button>
      <h4>Add todos</h4>
      {todos.map((item, index) => (
        <p key={index}>item</p>
      ))}
      <button onClick={() => addTodos()}>Add todos Button</button>
      <h1>Calculation :{calculation}</h1>
    </div>
  );
}

export default App;
