import { TodoItem } from "./TodoItem"
import { useSelector } from "react-redux"

export const TodoList = () => {
  const todos = useSelector(state => state.todos.todos)
  return (
    <ul>
      {
        todos.map(todo => <TodoItem key={todo.id} 
          removeTodo={removeTodo}
          toggleTodoComplete={toggleTodoComplete}
          {...todo}/>)
      }
    </ul>
  )
}