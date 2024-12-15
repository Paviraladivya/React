import React,{Component} from "react";
class UpadatingPhase extends Component{
 constructor(){
    super();
    this.state={Count:1}

 }
 componentDidUpdate(prvsProps,prvsState){
    console.log(prvsState.count,"previous state")
    console.log(this.state.count,"current state")
    if(prvsState.count!==this.state.count){
        console.log(`count value updated by ${this.state.Count}`);
    }
 }
 shouldComponentUpdate(nextProps,nextState){
    if(this.state.count>=10){
        return false;
    }
    else{
        return true
    }
 }
 getSnapshotBeforeUpdate(prvsProps,prvsState){
    console.log(prvsState,"snapshot")
 }
 increment=()=>{
    this.setState({Count:this.state.Count+1});
 }
 decrement=()=>{
    this.setState({Count:this.state.Count-1})
 }
 render(){
   const {Count}=this.state;
    return(
        <div>
            <h1>{Count}</h1>
        <button onClick={this.increment}>Next</button>
        <button onClick={this.decrement} disabled={Count<=1}>Previous</button>
        
       
        </div>
    )
 }
}
export default UpadatingPhase