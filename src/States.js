import React,{ Component }from "react"
class Counter extends Component{
    constructor(){
     super();
     this.state={Counter:2}
    }
    handleEvent=()=>{
      this.setState({Counter:this.state.Counter+1})
    }
    handleEvent1=()=>{
        this.setState({Counter:this.state.Counter-1})
      }
      handleEvent2=()=>{
        this.setState({Counter:this.state.Counter+2})
      }
      handleEvent3=()=>{
        this.setState({Counter:this.state.Counter-2})
      }

    render(){
        return(
            <div>
            <h1>{this.state.Counter}</h1>
            <button onClick={this.handleEvent}>+1</button>
            <button onClick={this.handleEvent1}>-1</button>
            <button onClick={this.handleEvent2}>+2</button>
            <button onClick={this.handleEvent3}>-2</button>

            </div>
        )
    }
}
export default Counter