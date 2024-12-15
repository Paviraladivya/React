
import React,{Component} from "react"
import "../gallery/home.css"
import Flower from "../photos/rose.jpg"
import Flower1 from "../photos/lily.jpg"
import Flower2 from "../photos/yellow rose.jpg"
import Flower3 from "../photos/yellow rose.jpg"
import Flower4 from "../photos/lotus.jpg"
import Flower5 from "../photos/rose.jpg"
import Flower6 from "../photos/lily.jpg"
import Flower7 from "../photos/lotus.jpg"
import Flower8 from "../photos/rose.jpg"
import Flower9 from "../photos/yellow rose.jpg"




class Home extends Component{
 
    render(){
        return(<div className="image">
            <img src={Flower} alt="Rose flower"/>
            <img src={Flower1} alt="lily flower" />
            <img src={Flower2} alt="yellowrose" />
            <img src={Flower3} alt="yellowrose"/>
            <img src={Flower4} alt="lotus"/>
            <img src={Flower5} alt="Rose flower"/>
            <img src={Flower6} alt="lily flower" />
            <img src={Flower7} alt="lotus"/>
            <img src={Flower8} alt="Rose flower"/>
            <img src={Flower9} alt="yellowrose" />


        </div>)
    }
} 
export default Home