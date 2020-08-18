import React from 'react';
import {Link} from 'react-router-dom';
import { Container } from 'reactstrap';

const BasePage = (props) => {
  return (
    <Container>
      <h1>Django React Base Page</h1>
      <Link to="/login">Login</Link>
    </Container>
  )
}

export default BasePage;