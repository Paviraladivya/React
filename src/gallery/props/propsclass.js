import React ,{Component} from "react";

class Notification extends Component{
    render(props){
        return(<div>
            <h1>Notification card</h1>
            <p1>{this.props.name} has {this.props.type} </p1>
        </div>)
    }
}
export default Notification;