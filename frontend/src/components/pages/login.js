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
import { validateForm, validateFormField } from '../../utils/validate';
import loginRequest from '../../actions/auth/login';
import { useSelector, useDispatch } from 'react-redux';


const Login = (props) => {

  let [formControl, setFormControl] = useState(login_fields);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    // check if all fields of form are valid
    let isValidForm = validateForm(formControl);

    if(isValidForm){
      let data = {
        "username": formControl.username.value,
        "password": formControl.password.value
      }
      // call API login url.
      dispatch(loginRequest(data));
    }else{
      // The form is invalid
    }
  }

  const onChangeHandler = (value, field) => {
    setFormControl(validateFormField(formControl, field, value));
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