import React from "react";
import Todo from "./Todo";
import Increment from "./Increment";
import Memo from "./Memo";

const App=()=>{
    return(
        <div className="App">
            <Todo/>
            <Increment />
            <Memo/>
        </div>
    )
}
export default App;