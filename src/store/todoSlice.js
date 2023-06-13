import {createSlice} from "@reduxjs/toolkit"

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo(state, action) {
      console.log(state);
      console.log(action)

      state.todos.push({
        id: new Date().toDateString(),
        text: action.payload.text,
        complited: false,
      })
    },
    removeTodo(state, action) {},
    toggleTodoComplete(state, action) {}
  }
})

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions

export default todoSlice.reducer