import React from "react";
import { Form, Button } from "react-bootstrap";

const Leftside = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <Form style={{ width: "500px", marginLeft: "10%", marginTop: "10%" }}>
        <Form.Group>
          <Form.Label>Enter your email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>
        <Button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Leftside;
