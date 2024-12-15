import React from "react";
import UserComp from "./usercomp";
import AdminComp from "./admin";
function Parentcomp(props){
return(
   props.login === "user"?<UserComp/>:<AdminComp/>
)
}
export default Parentcomp