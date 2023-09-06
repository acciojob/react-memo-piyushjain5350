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
import React,{useState} from 'react'

let Memo= (props)=>{
    let [string,Setstring]=useState('')
    function adddata(){
        console.log(string)
        if(string.length>5){
          props.set([...props.arr,string])
          Setstring('')  
        } 
    }
    return(
        <div>
            <div className='cont'>
            <h1>React.memo</h1>    
            <input type='text' onChange={(event)=>Setstring(event.target.value)} value={string} id='skill-input'></input>
            <button onClick={adddata} id='skill-btn'>Add Skill</button>
            </div>
            <ul>
            {  props.arr.map(element=>{
                    return <li id={'item-'+element}>{element}</li>
            })
            }
            </ul>
        </div>
    )
}
export default Memo