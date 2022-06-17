import React from 'react'

export function TodoItem({ todo, toogleTodo }) {

  const toogleTodoStudy = () => {
    toogleTodo( todo.id );
  }

  return (
    <li>Aprendido: <input type="checkbox" checked={ todo.study } onChange={ toogleTodoStudy } /> - Framework: { todo.task }
    </li>
  )
}
