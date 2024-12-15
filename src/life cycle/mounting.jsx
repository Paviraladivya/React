import React, { Component } from "react";

import Mountingcards from "../life cycle/cardsmountingboots";

class LifeCycle extends Component {
  constructor() {
    super();
    this.state = { products: [] };
  }
  componentDidMount() {
    console.log("mounting");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ products: json });
      });
  }
  static getDerviedStateProps() {
    console.log("statederiving from props");
    return null;
  }
  render() {
    return (
    //   <div
    //     style={
    //       {
    //         display: "flex",             // Enable flex layout
    //         flexWrap: "wrap",            // Allow wrapping of cards
    //         justifyContent: "space-evenly",  // Distribute cards evenly
    //         gap: "20px",
    //         flex: "1 1 calc(25% - 20px)",
    //         boxSizing: "border-box",               // Add space between cards
    //       }
    //     }
    //   >
    //     <div>
    //       {this.state.products.map((a, b) => {
    //         return (
    //           <Mountingcards
    //             title={a.title}
    //             img={a.image}
    //             desc={a.description}
    //             info={a.category}
    //           />
    //         );
    //       })}
    //     </div>
    //   </div>
    <>
    <div style={{
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",  
  gap: "20px",
}}>
  {this.state.products.map((a, b) => (
    <div key={b} style={{
      flex: "1 1 calc(25% - 20px)", 
      boxSizing: "border-box", 
      display: "flex",
      justifyContent: "center", // To center the card content
    }}>
      <Mountingcards
        title={a.title}
        img={a.image}
        desc={a.description}
        info={a.category}
      />
    </div>
  ))}
</div>
    </>
    );
  }
}
export default LifeCycle;
