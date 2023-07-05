import React from 'react'
import Todo from './Todo'

const Todos = () => {
    const todos =[
        {item:"I want to eat"},
        {item:"I want to eat"},
        {item:"I want to eat"},
        {item:"I want to eat"},
        {item:"I want to eat"},
        {item:"I want to eat"},
        {item:"I want to eat"},
    ]
  return (
    <div className='todos-Container'>
      {
        todos.map((item, index) =>(
            <Todo key= {index} numbering={index + 1}todo = {item.item} />
        ))
      }
    </div>
  )
}

export default Todos