import React, { Component } from "react";
class Sampleform extends Component{
    constructor(){
        super();
        this.state={fname:"",output:""}
        this.state={sname:"",output:""}
    }
    handleChange=(event)=>{
  console.log(event.target.name)
  const value=event.target.value;
  this.setState({fname:value});
  this.setState({sname:value})

    }
    handlesubmit=(e)=>{
        e.preventDefault();
        this.setState({output:this.state.fname})
        this.setState({output:this.state.sname})
       
    }
    render(){
        return(
            <div>
     
     <form onSubmit={this.handlesubmit}>
                    <input type="text" name="fname" onchange={this.handleChange}></input>
                    <input type="text" name="sname" onChange={this.handleChange}></input>
                    <input type="submit"/>
                </form>
                <h1>{this.state.output}</h1> 
     
            </div>
        )
    }
}
export default Sampleform