import React from 'react'

function Inputcontain({inputVal, writeTodo, addTodo}) {
  return (
    <div>
       <div className="input">
        <input type="text" placeholder="Add a task" value={inputVal} onChange={writeTodo} />
        <button onClick={addTodo} >+</button>
      </div>
    </div>
  )
}

export default Inputcontain
