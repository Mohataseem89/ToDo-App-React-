import { useState } from "react";
import "./App.css";
import Inputcontain from "./components/Inputcontain"; 
import Todocontain from "./components/Todocontain";
// import e from "express";

function App() {

  const[inputVal, setInputVal] = useState('')
  const[todos, setTodos] = useState([])
  function writeTodo(e){
    setInputVal(e.target.value)
    // console.log(e.target.value)
    // console.log(inputVal)
  }

  function addTodo(){
    if(inputVal != ''){
      setTodos((prevTodos)=>[...prevTodos ,inputVal])
      setInputVal('')
    }
    // console.log('Add todo')
  }


  function deletelist(todoIndex){
    // setTodos((prevTodos)=>prevTodos.filter((todo, index)=>index !== todoindex))
    setTodos((prevTodos)=>prevTodos.filter((prevTodos, prevTodosIndex)=>
      { return prevTodosIndex != todoIndex;})
    )
}








console.log(todos)
  return (
    <>
      <h1>To Do list</h1>
     <Inputcontain inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo} />
     <Todocontain todos={todos} deletelist={deletelist} />

     
    </>
  );
}

export default App;
