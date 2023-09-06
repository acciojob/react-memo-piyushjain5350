import React,{useState ,useEffect}from "react";

const Todo=()=>{
    // const [val,setVal]=useState('New Todo');
    
    const [data,setData]=useState(['New Todo']);
    useEffect(()=>{
        console.log(data);
    },[data])
    function handlingFn(){
        setData([...data,'New Todo']);
        // setVal('');
    }
    return(
     <div className="todo">
        <h1>My todos</h1>    
        {data.map((item,idx)=>(
            <p key={idx}>{item}</p>
        ))} 
        <button onClick={handlingFn}>Add Task</button>
     </div>
    )
}

export default Todo;