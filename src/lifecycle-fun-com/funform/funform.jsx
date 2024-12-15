
import React,{useState} from "react";
import "./funform.css"
import MyVerticallyCenteredModal from "./modal";
import Prabhas from "../../photos/prabhas.jpg"; 

function FormComp(){
    const [modalShow, setModalShow] = React.useState(false);
    const[formData,setFormData]=useState({
        user:"",
        mobile:"",
        email:"",
            
    });
    const handleInput=(e)=>{
        let{name,value,type}=e.target;

        setFormData((a)=>{
            return{
                ...a,
                [name]:value,

            }
        })
    } 
    const handleSubmit=(e)=>{
        e.preventDefault();
        setModalShow(true)

    } 
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="user" value={formData.user} onChange={handleInput} placeholder="enter username"/>
                <input type="email" name="email" value={formData.email} onChange={handleInput} placeholder="enter email" />
                <input type="text" name="mobile" value={formData.mobile} onChange={handleInput} placeholder="mobile number"/>
               <input type="submit"/>
            </form>
            <MyVerticallyCenteredModal
  show={modalShow}
  onHide={() => setModalShow(false)}
  user={formData.user}
  mobile={formData.mobile}
  email={formData.email}
  imageUrl={Prabhas}
/>

          
        </div>
    )
}
export default FormComp