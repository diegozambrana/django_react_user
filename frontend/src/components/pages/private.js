import React from 'react';
import { useHistory } from "react-router-dom";
import {Container, Button} from 'reactstrap';
import logout from '../../actions/auth/logout';
import { useDispatch } from 'react-redux';

const Private = () => {
  let history = useHistory();
  let dispatch = useDispatch()

  return (
    <Container>
      <h1>Private Page</h1>
      <p>private page content</p>
      <Button onClick={() => {
          dispatch(logout());
          history.push("/login");
        }}>Logout</Button>
    </Container>
  )
}

export default Private;