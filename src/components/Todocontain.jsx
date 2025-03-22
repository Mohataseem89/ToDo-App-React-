import React from 'react'
import Todo from './Todo'

function Todocontain({todos , deletelist}) {
  return (
    
       <div className="container">
        {/* {todos.map((todo)=>{ */}
        {todos.map((todo, index)=>{
            return(
                // <Todo todo={todo} deletelist={deletelist} />
                <Todo index={index} todo={todo} deletelist={deletelist} />
            )
        })}
       
      </div>
    
  )
}

export default Todocontain
