// import React,{useState} from "react";

// const Memo=()=>{
//     const [val,setVal]=useState('');
//     const [data,setData]=useState([]);

//     function handlingFn(){
//         setData([...data,val]);
//         setVal('');
//     }
//     return(
//         <div>
//             <h1>React.Memo</h1>
//             <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
//             <button onClick={handlingFn}>Add Task</button> 

//             <ul>
//                     {data.map((item,idx)=>(
//                         <li key={idx}>{item}</li>
//                     ))} 
//             </ul>
//         </div>
//     )
// }

// export default Memo;
import React, { useState, useEffect } from 'react';

function Memo() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');
  const [isTextValid, setIsTextValid] = useState(true);
  
    const [skills, setSkills] = useState([]);

  const handleAddTodo = () => {
    setTodos([...todos, 'New Todo']);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);
    setIsTextValid(newText.length > 5);
  };

  const handleSubmit = () => {
    if (isTextValid) {
      setSkills([...skills, inputText]);
      setInputText('');
    }
  };

  useEffect(() => {
    console.log('Todos updated:', todos);
  }, [todos]);

  return (
    <div id="main">
      <div className='use-memo'>
        <h1>React.useMemo</h1>
        <h1>My todos</h1>
        <div className="memo-list">
        <p>New todos</p>
        {todos.map((todo, index) => (
          <p id={`todo-${index}`} key={index}>{todo}</p>
        ))}
      </div>
        <button id='add-todo-btn' onClick={handleAddTodo}>Add Todo</button>
      </div>
      <hr/>
      <p id='incr-cnt'>Count:{count} </p><button id='incr-btn' onClick={handleIncrement}>{count}</button>
      <h1>Expensive Calculation</h1>
      <p id='calc'>{count === 0? '1000000000' : `${1000000000+count}`}</p>
      <hr/>
      <hr/>
      <div className="memo-input">
        <h1>React.memo</h1>
        <input
          type="text"
          id='skill-input'
          value={inputText}
          onChange={handleInputChange}
          placeholder="add skill"
          className={isTextValid ? '' : 'invalid'}
        />
        <button id='skill-btn' onClick={handleSubmit}>
          Add Skill
        </button>
      </div>

      <ul className="memo-list">
        {skills.map((skill, index) => (
          <li id='item-jumbotron' key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Memo;