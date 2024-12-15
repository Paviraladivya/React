import React,{useState} from "react";

function FuncLifeCyle(){
    const [text,setText]=useState(1)

    const increment=()=>{
        setText(text+1)

    }
    const decrement=()=>{
      setText(text-1)
    }
    const reset=()=>{
      setText(0)
    }

    return(
        <div>
          <h1>{text}</h1>
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
    )

}
export default FuncLifeCyle