import Todo from "./components/Todo";

function App() {
  return (
    <div>
        <h1>My Todos</h1>
        <Todo text = 'Do'></Todo>     
        <Todo text = 'Stupid'></Todo>     
        <Todo text = 'Things'></Todo>     
    </div>
  );
}

export default App;
