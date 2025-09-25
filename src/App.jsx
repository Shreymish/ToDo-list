import { useState } from 'react';
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [todo , setTodo]= useState("")
  const [todos , setTodos]= useState([])
  const handleEdit = (idx) => {
    const current = todos[idx]?.todo ?? '';
    const newText = prompt('Edit todo', current);
    if (newText === null) return; // user cancelled
    setTodos(prev => prev.map((t, i) => i === idx ? { ...t, todo: newText } : t));
  }
  const handleDelete = (idx) => {
    setTodos(prev => prev.filter((_, i) => i !== idx));
  }
  const handleAdd = () =>{
    if (!todo.trim()) return;
    setTodos([...todos, { todo, iscompleted: false}]); 
    setTodo("");
  }
  const handleChange = (e) =>{
    setTodo(e.target.value);}
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className=" addTodo my-5 ">
          <h2 className='text-lg font-bold '>Add Todo</h2>
          <input onChange ={handleChange} value = {todo} type="text" className='w-80' />
          <button onClick={handleAdd} className = 'bg-violet-300 hover:bg bg-blue-300 p-3 py-1 font-bold text-white rounded-md mx-5' > Add</button>
          </div>
          <h2 className= 'text-lg font-bold'>Your Todo</h2>
          <div className="todos">
            {todos.map((item, idx) => (
               <div key={idx} className="todo flex items-center gap-4 my-2">
                <div className={item.iscompleted ? 'line-through' : ''}>{item.todo}</div>
                <div className="buttons">
                  <button
                    onClick={() => handleEdit(idx)}
                    className="bg-blue-300 hover:bg-blue-400 p-3 py-1 text-sm text-white rounded-md mx-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(idx)}
                    className="bg-blue-300 hover:bg-blue-400 p-3 py-1 text-sm text-white rounded-md mx-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>  
          
        </div>
      
         
    </>
  );
}

export default App;



