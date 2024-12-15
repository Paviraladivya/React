import { useState } from "react"

function SampleForm(){
    const [User,setUser]=useState("")
    const [Result,SetResult]=useState(User)
   const handleInput=(e)=>{
        setUser(e.target.value)
    }
    const handleSubmit=(e)=>{
       
        SetResult(User)
    setUser("")

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
          <input type="text" name="user"value={User} onChange={handleInput}/>
          < input type="submit"/>
          </form>
          <h1>{Result}</h1>

        </div>
    )
}
export default SampleForm