import React,{useEffect,useState} from "react";
import axios from "axios";
function ProfileCardRouter(){
    const[product,setProduct]=useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>setProduct(res.data))

    },[])
    return(
        <div>
            
        </div>
    )

}
export default ProfileCardRouter