import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Animation from "./Animation";
import "./style.css";

function Item(props) {

  const [color, setColor] = useState("#80CED7");
  let history = useHistory();

  return (
    <Row className="item">
      <Row>
        <Col sm={6}>
          <Animation {...props} color={color} />
        </Col>
      </Row>
      <Col className="info">
        <h2>{props.name}</h2>
        <br />
        <br />
        <p>{props.description}</p>
        <Row>
          <Col>
            <p>Available Colors:</p>
            <Button id="blue" onClick={() => setColor("#80CED7")}></Button>
            <Button id="flax" onClick={() => setColor("#E9D985")}></Button>
            <Button id="red" onClick={() => setColor("#BF211E")}></Button>
          </Col>
          <Col>
            <p>Price: ₹{props.price}</p>
          </Col>
          <Row>
            <Button id="edit" onClick={() => {history.push({pathname:'/edit',state:{id:props.id}})}}>Edit</Button>
            <Button id="edit" onClick={() => {
              console.log("props",props.id)
              props.removeProduct(props.id)
            }}>Delete</Button>
          </Row>
        </Row>
      </Col>
    </Row>
  );
}

export default Item;