import React,{useState} from "react";

const Increment=()=>{
    const [val,setVal]=useState(1000000000)
    return(
        <div>
            <h1>Expensive Calculation</h1>
            <p onClick={()=>setVal(prev=>prev+1)}>{val}</p>
            {/* <button >Increment</button> */}
        </div>
    )
}

export default Increment;