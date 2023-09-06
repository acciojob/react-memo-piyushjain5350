import React from "react";
import Todo from "./Todo";
import Increment from "./Increment";
import Memo from "./Memo";

const App=()=>{
    return(
        <div className="main">
            <Todo/>
            <Increment />
            <Memo/>
        </div>
    )
}
export default App;