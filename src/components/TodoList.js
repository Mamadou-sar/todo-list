import React from 'react';
import { BsCheckCircle, BsTrash } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';

const TodoList = ({ todos, setTodos, setEditTodo }) => {
   const handleComplete = (todo) => {
      setTodos(
         todos.map((item) => {
            if (item.id === todo.id) {
               return { ...item, completed: !item.completed };
            }
            return item;
         })
      );
   };

   const handleEdit = ({ id }) => {
      const findTodo = todos.find((item) => item.id === id);
      setEditTodo(findTodo);
   };
   const handleDelete = ({ id }) => {
      setTodos(todos.filter((todo) => todo.id !== id));
   };
   return (
      <div>
         {todos.map((todo) => (
            <li style={{ display: 'flex' }} className='list-item' key={todo.id}>
               <input
                  type='text'
                  value={todo.title}
                  className='list'
                  onChange={(event) => event.preventDefault()}
               />
               <div>
                  <button
                     className='button-complete task-button'
                     onClick={() => handleComplete(todo)}>
                     <BsCheckCircle />
                  </button>
                  <button
                     className='button-edit task-button'
                     onClick={() => handleEdit(todo)}>
                     <BiEdit />
                  </button>
                  <button
                     className='button-delete task-button'
                     onClick={() => handleDelete(todo)}>
                     <BsTrash />
                  </button>
               </div>
            </li>
         ))}
      </div>
   );
};

export default TodoList;
