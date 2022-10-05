import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import Nav from "./Nav";

const Login = (props) => {
  const [username, setUsername] = React.useState(0);
  const [password, setPassword] = React.useState(0);

  return (
    <div className="App">
      <Container>
        <Nav />
        <h1>Login</h1>
        <Form>
          <Form.Group>
            <Form.Label>Username</Form.Label> <br />
            <Form.Control
              name="electiveNo"
             
              min="0"
              max="6"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <Form.Label>Password</Form.Label> <br />
            <Form.Control
              name="electiveNo"
              type="password"
              min="0"
              max="6"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <Button
              className="proceed"
              onClick={() => {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                props.setlogin(false);
              }}
            >
              Login
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
