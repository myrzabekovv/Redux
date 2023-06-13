import { useState } from "react"
import './App.css'
import { TodoList } from "./components/TodoList"
import { InputField } from "./components/InpultField"
import { useDispatch } from "react-redux"
import { addTodo } from "./store/todoSlice"

function App() {
  const [text ,setText] = useState('')
  const dispatch = useDispatch()

  const addTask = () => dispatch(addTodo(text))


  const toggleTodoComplete = (todoId) => {
    // setTodos(
    //   todos.map(
    //     todo => {
    //       if (todo.id !== todoId) return todo

    //       return {
    //         ...todo,
    //         complited: !todo.complited,
    //       }
    //     }
    //   )
    // )
  }

  const removeTodo = (todoId) => {
    // setTodos(todos.filter(todo => todo.id !== todoId))
  }

  return (
    <>
  <InputField text={text}
    handleInput={setText}
    handleSubmit={addTask}/>

  <TodoList/>

    </>
  )
}

export default App
