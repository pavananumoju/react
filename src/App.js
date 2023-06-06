import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn'/><br/>
      <Todo text='Develop'/><br/>
      <Todo text='Deploy'/>
    </div>
  );
}

export default App;
