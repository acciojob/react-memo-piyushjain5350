// import React,{useState} from "react";

// const Increment=()=>{
//     const [val,setVal]=useState(1000000000)
//     return(
//         <div>
//             <h1>Expensive Calculation</h1>
//             <p onClick={()=>setVal(prev=>prev+1)}>{val}</p>
//             {/* <button >Increment</button> */}
//         </div>
//     )
// }

// export default Increment;
import React from 'react'

let Count= (props)=>{
    function adddata(){
        props.set(props.number+1)
    }
    return(
        <div id='incr-cnt'>
            <div className='cont'>
             <h1>My Todos</h1>   
            <div id='calc'>{props.number}</div>
            <button onClick={adddata} id='incr-cnt'>+</button>
            </div>
        </div>
    )
}
export default Count