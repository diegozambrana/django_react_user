import React, { useState } from 'react';
import {
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Col
} from 'reactstrap';
import { login_fields } from './fields'
import { Link } from 'react-router-dom';
import validate from '../../utils/validate';


const Login = (props) => {

  let [formControl, setFormControl] = useState(login_fields);

  const onSubmit = (event) => {
    event.preventDefault();
    
    let isValidForm = true;
    
    Object.keys(formControl).forEach(key => {
      isValidForm = isValidForm && formControl[key].valid;
    })
    
    if(isValidForm){
      let data = {
        "username": formControl.username.value,
        "password": formControl.password.value
      }
      // Call Login with data
    }else{
      // The form is invalid
    }
  }

  const onChangeHandler = (value, field) => {
    let fields = formControl;
    fields[field].value = value;
    fields[field].valid = validate(value, fields[field].validationRules);
    fields[field].invalid = !fields[field].valid
    setFormControl(fields);
  }

  return (
    <Container>
      <Row style={{marginTop: 20}}>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              id="username"
              onChange={e => onChangeHandler(e.target.value, 'username')}
              valid={formControl.username.valid}
              invalid={formControl.username.invalid}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              onChange={e => onChangeHandler(e.target.value, 'password')}
              valid={formControl.password.valid}
              invalid={formControl.password.invalid}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="submit"
              name="login_button"
              id="login_button"
              value="Login"
            />
          </FormGroup>
        </Form>
      </Row>
      <Row>
        <Col>
          <Link to="/forgot">Forgot your password?</Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/register">Register a new user</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Login;