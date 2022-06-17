import React from 'react'

import { TodoItem } from './TodoItem'

export function TodoList({ todos, toogleTodo }) {
  return (
    <ul>
      { todos.map((todo) => (
          <TodoItem todo={ todo } key={ todo.id } toogleTodo={ toogleTodo } />
        ))
      }
    </ul>
  ) 
}