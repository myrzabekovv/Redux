export const TodoItem = ({id, text, complited, removeTodo , toggleTodoComplete}) => {
  return (
    <li>
        <input
         type="checkbox"
         checked={complited}
         onChange={() => toggleTodoComplete(id)}
         />
          <span>{text}</span>
          <span className="delete" onClick={() => removeTodo(id)}>$times;</span>
    </li>
  )
}