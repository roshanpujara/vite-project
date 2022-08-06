import React,{useState} from "react";
function UsingUseState(){
    const [value,setValue] = useState(0);
    const increment=()=>setValue(value+1);
    const decrement=()=>setValue(value-1);
    return(
        <div>
            <button onClick={increment}>value increment</button>
            <h1>{value<=0?0:value}</h1>
            <button onClick={decrement}>value decrement</button>
        </div>
    )
}
export default UsingUseState
