import React, { useState, Fragment, useRef, useEffect } from 'react'

import { v4 as uuid } from 'uuid'

import { TodoList } from './components/TodoList'

const KEY = 'todoApp.todos'

export function App() {
  const [todos, setTodos] = useState([
    { id: uuid(), task: 'React', study: false },
    { id: uuid(), task: 'Vue', study: true },
    { id: uuid(), task: 'Angular', study: false },
    { id: uuid(), task: 'Svelte', study: false },
    { id: uuid(), task: '.Net', study: false },
  ])

  const todoTaskRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY))
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos))
  }, [todos])

  const toogleTodo = (id) => {
    const newTodo = [...todos]
    const todo = newTodo.find((todo) => todo.id === id)
    todo.study = !todo.study
    setTodos(newTodo)
  }

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value

    if (task === '') return

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuid(), task, study: false }]
    })

    todoTaskRef.current.value = null
  }

  const deleteTask = () => {
    const todo = todos.filter((e) => !e.study)
    setTodos(todo)
  }

  return (
    <Fragment>
      <TodoList todos={todos} toogleTodo={toogleTodo} />
      <input ref={todoTaskRef} type="text" placeholder="Add Task" />
      <button onClick={handleTodoAdd}>Create</button>
      <button onClick={deleteTask}>Delete</button>
      <br />
      <span>
        Tareas por terminar: {todos.filter((todo) => !todo.study).length}
      </span>
    </Fragment>
  )
}
