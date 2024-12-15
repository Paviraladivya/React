import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";


function Mountingcards(props) {
  return (
    <div > 
      <Card style={{ width: "18rem", height: "25rem", backgroundColor: "orange", borderRadius: "10px", display:"flex" }}> 
        <Card.Img 
          variant="top" 
          src={props.img} 
          style={{ height: "150px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }} 
        />
        <Card.Body style={{ overflowY: "scroll" }}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted" style={{ textAlign: "center" }}>
            <Button variant="primary">{props.info}</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Mountingcards;