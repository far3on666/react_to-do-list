import {useRef, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const refrance = useRef()
  const handleAddtodo = () => {
    const text = refrance.current.value;
    const newitem={completed:false,text}
    setTodos([...todos, newitem])
    refrance.current.value = "";
  }
  const handleItemDone = (index) => {
    const newtodos = [...todos]
    newtodos[index].completed=!newtodos[index].completed
    setTodos(newtodos)

  }
  const handleDleteItem = (index) => {
    const newtodos = [...todos]
    newtodos.splice(index, 1)
    setTodos(newtodos)
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="to-do-container">
      <input ref={refrance} placeholder="add task...."/>
      <button onClick={handleAddtodo}>ADD</button>
        <ul>
        {todos.map( ({text,completed},index)=>{
          return (<div className="item"><li key={index} className={completed ? "done" : ""}
            onClick={() => handleItemDone(index)}>
            {text}</li>
            <span onClick={()=>handleDleteItem(index)}>❌</span>
          </div>);
        })}
        </ul>
      </div>
    </div>
  )
}

export default App;