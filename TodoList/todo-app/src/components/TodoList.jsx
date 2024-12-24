import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ( { todoList, onToggle, onRemove } ) => {
  return (
    <ul className="todoList">
      {
        todoList.map( (todo) => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))
      }
    </ul>
  )
}

export default TodoList