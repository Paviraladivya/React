import { Component } from "react";

class Toggle extends Component{
    constructor(){
        super();
        this.state={isOn:true}
    }
    handleButton=()=>{
        this.setState({isOn:!this.state.isOn})
    }
    render(){
        return(
            <div>
            <button className={this.state.isOn?"SwitchOn":"Switchoff"}onClick={this.handleButton}>{this.state.isOn? <h1>SwitchOn</h1>:<h1>Switchoff</h1>}</button>
            <h1>{!this.state.isOn?<h1> SwitchOn</h1>:<h1>Switchoff</h1>}</h1>
            </div>
        )
        
    }
}
export  default Toggle