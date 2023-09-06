// import React from "react";
// import Todo from "./Todo";
// import Increment from "./Increment";
// import Memo from "./Memo";

// const App=()=>{
//     return(
//         <div className="main">
//             <Todo/>
//             <Increment />
//             <Memo/>
//         </div>
//     )
// }
// export default App;
import React,{useState} from 'react'
import Todos from './Todos'
import Memo from './Memo'
import Count from './Increment'
import { useEffect } from 'react'

let App = () =>{
    useEffect(()=>{

    },[count,memo,todos])
    let [todos,Settodos]=useState(['New Todo'])
    let [memo,Setmemo]=useState(['HTMLL',"CSSS3"])
    let [count,Setcount]=useState(1000000000)
    return(
        <div id='main'>
        <h1>React.useMEMo</h1>
        <Todos set={Settodos} arr={todos} />
        <Count set={Setcount} number={count}/>
        <h1>Expensive Calculation</h1>
        {/* <div id='calc'>1000000000</div> */}
        <Memo set={Setmemo} arr={memo} />
        </div>
    )
   
        
}

export default App