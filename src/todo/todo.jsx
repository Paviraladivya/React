import React,{Component} from"react";
class Todo extends Component{
    constructor(){
        super();
        this.state={
            todo:"",
            list:[],
            inputValue:""
        }
    }
    handleChange=(event)=>{
        console.log(event.target.value);
        this.setState({todo:event.target.value})
    }
    handleSubmit=(e)=>{
       e.preventDefault();
        this.setState((a)=>{
            return{list:[...a.list,a.todo],
                todo:""
            }
            
        })
    }


    render(){
        return(
            <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="todo" id="todo" value={this.state.todo} onChange={this.handleChange}/>
            <input type="submit"/>
          </form>
          {this.state.list.map((a,b)=>{
            return(
                <ul>
                    <li key={b}>{a} <button>edit</button><button>delete</button></li>
                </ul>
            )
          })}
            </div>
        )
    }
}
export default Todo;