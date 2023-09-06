import React,{useState} from "react";

const Memo=()=>{
    const [val,setVal]=useState('');
    const [data,setData]=useState([]);
    
    function handlingFn(){
        setData([...data,val]);
        setVal('');
    }
    return(
        <div>
            <h1>React.Memo</h1>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
            <button onClick={handlingFn}>Add Task</button> 

            <ul>
                    {data.map((item,idx)=>(
                        <li key={idx}>{item}</li>
                    ))} 
            </ul>
        </div>
    )
}

export default Memo;