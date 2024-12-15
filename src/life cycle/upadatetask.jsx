import React,{Component} from "react";
import axios from "axios";
import Mountingcards from "./cardsmountingboots";
import { Spinner } from "react-bootstrap";
class Cardsfun extends Component {
    constructor(){
        super();
        this.state={Count:0,product:[]}
    }
    componentDidUpdate(prvsProps,prvsState){
        if(prvsState.Count!==this.state.Count){
            this.PreventFetch(this.state.Count);
        
        }
     
         }
         PreventFetch=(id)=>{
            axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
                this.setState({product:res.data})
            })
         }

         eventHandler=(id)=>{
            this.setState({Count:id});

         }


         shouldComponentUpdate(nextProps,nextState){
             if(this.state.Count>=10){
                 return false
             }
             else{
                 return true
             }
     
         }

    render(){
        const{Count,product}=this.state
        
        return(
            <div style={{ textAlign:"center", justifyItems:"center"}}>
            <div >
            <h1>Product</h1>
            
                {[1,2,3,4,5,6,7,8,9,10].map((num)=>(
                    <button key={num} onClick={() =>this.eventHandler(num)}>
                       {num}

                    </button>
                ))}
            <div  >

            {!product?<h1><Spinner/></h1>:< Mountingcards img={product.image} tittle={product.tittle} desc={product.description} info={product.category}/>}
            </div>
            </div>
            </div>
        )
    }

}
export default Cardsfun