import React,{Component } from "react";
import "./header.css"
class Header extends Component{
     render(){
        return(
          <header className="item">
            <div>
                <h2> Pavirala Divya</h2>
                <ul className="item1">
                  <li>
                    <a href="mailto: divyapavirala@gmail.com"> divyapavirala@gmail.com</a>
                  </li>
                  <li>
                    <a href="mailto: divyapavirala@gmail.com">linkdin</a>
                  </li>
                  <li>
                    <a href="mailto: divyapavirala@gmail.com">Github</a>
                  </li>
                 </ul>
                  </div>
            </header>
        )
     }

}
export default Header 