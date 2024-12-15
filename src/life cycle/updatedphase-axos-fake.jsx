
import React, {Component} from "react";
import axios from "axios"
import Mountingcards from "./cardsmountingboots";
class  AxosCard extends Component{
    constructor(){
        super();
        this.state={Count:0,product:null}
    }
    componentDidUpdate(prvsProps,prvsState){
   if(prvsState.Count!==this.state.Count){
    axios.get(`https://fakestoreapi.com/products/${this.state.Count}`).then((res)=>{
        this.setState({product:res.data})
    })
   }

    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.Count>=10){
            return false
        }
        else{
            return true
        }

    }
    getSnapshotBeforeUpdate(prvsProps,prvsState){
        console.log(prvsState,"snapshot")
        return null;
     }
     increment=()=>{
        this.setState({Count:this.state.Count+1});
     }
     decrement=()=>{
        this.setState({Count:this.state.Count-1})
     }
   render(){
    const{Count,product}=this.state
   
    return(
        <div>
            <h1>{Count}</h1>
            <button onClick={this.increment}>Next</button>
            <button onClick={this.decrement} disabled={Count<=1}>Previous</button>
            {!product?<h1>no card</h1>:< Mountingcards img={product.image} tittle={product.tittle} desc={product.description} info={product.category}/>}
        </div>
    )
   } 
}
export default AxosCard