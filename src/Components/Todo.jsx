import React from 'react'

const Todo = ({Todo}) => {
  return (
    <div className='todo'>
        {Todo}
        <p style={{marginRight: 5}}>Numbering</p>
        <p>Todo</p>
        <div className='Actions' >
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>
  )
}

export default Todo