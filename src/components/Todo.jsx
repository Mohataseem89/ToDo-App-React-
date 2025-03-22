import React from 'react'

function Todo({todo, index, deletelist}) {
  return (
    <div>
       <div className="todo">
          <p>{todo}</p>
          <div className="action">
            <input type="checkbox" />
            <button onClick={()=> deletelist(index)} >Delete</button>
          </div>
        </div>
    </div>
  )
}

export default Todo
