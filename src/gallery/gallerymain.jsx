import React,{Component} from "react";

import Header from "./header";
import Home from "./home"
import Footer from "./footer";
import ProfileCard from "./props/propsffun";
import Notification from "./props/propsclass";

class Gallery extends Component{
 
    render(){
        return(<div style={{textAlign:"center"}}>
            
         <Header/>  
           <Home/>  
         <Footer /> 
          <ProfileCard name="Divya" City="hyd" role="develper"/>
           <ProfileCard name="shushu" City="hyd" role="parmasicts"/>
           <ProfileCard name="chintu" City="hyd" role="developer"/>
           <ProfileCard name="manasa" City="hyd" role="developer"/>.
           <Notification type="liked" name="maheshwari"/>
           <Notification type="commented" name ="akihla"/>
           <Notification type="shared" name="shivani"/>
           <Notification type="saved" name="santhoshi"/>
          
            
        </div>)
    }
} 
export default Gallery