import React, { useState } from 'react';
import {
  Container,
  Row,
  Form,
  FormGroup,
  Input,
  FormText,
} from 'reactstrap';
import { validateForm, validateFormField } from '../../utils';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register_fields } from './fields';
import RegisterRequest from '../../actions/auth/register';


const Register = (props) => {
  let [formControl, setFormControl] = useState(register_fields);
  let [loading, setLoading] = useState(false);
  const { registerSuccess } = useSelector(s => s);
  const dispatch = useDispatch();
  const {auth_access, registerRequestFail, registerDataError} = useSelector(s => s);

  const onSubmit = (event) => {
    setLoading(true);
    event.preventDefault();

    // check if all fields of form are valid
    let isValidForm = validateForm(formControl);

    if(isValidForm){
      let data = {
        email: formControl.email.value,
        first_name: formControl.first_name.value,
        last_name: formControl.last_name.value,
        password: formControl.password.value,
        confirm: formControl.confirm.value,
      }
      dispatch(RegisterRequest(data));
    }
  }

  const onChangeHandler = (value, field) => {
    setFormControl(validateFormField(formControl, field, value));
  }

  return (
      <Container>
        { auth_access && <Redirect to="/private"/>}
        <Row>
          <h1>Register</h1>
        </Row>
        { registerSuccess &&
          <Row>User was registered Sucessfully</Row>
        }
        { registerRequestFail && 
          <Row>
            {Object.keys(registerDataError).map(k => registerDataError[k].length ? registerDataError[k].map(d => <p key={`error_register_${k}`}>{d}</p>) : <p key={`error_register_${k}`}>{registerDataError[k][k]}</p>)}
          </Row>
        }
        { !registerSuccess &&
          <Row>
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="email"
                  placeholder="e-mail"
                  id="email"
                  onChange={e => onChangeHandler(e.target.value, 'email')}
                  valid={formControl.email.valid}
                  invalid={formControl.email.invalid}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  id="first_name"
                  onChange={e => onChangeHandler(e.target.value, 'first_name')}
                  valid={formControl.first_name.valid}
                  invalid={formControl.first_name.invalid}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  id="last_name"
                  onChange={e => onChangeHandler(e.target.value, 'last_name')}
                  valid={formControl.last_name.valid}
                  invalid={formControl.last_name.invalid}
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
                  type="password"
                  name="confirm"
                  placeholder="Confirm Password"
                  id="confirm"
                  onChange={e => onChangeHandler(e.target.value, 'confirm')}
                  valid={formControl.confirm.valid}
                  invalid={formControl.confirm.invalid}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="submit"
                  name="register_button"
                  id="register_button"
                  value="Submit"
                />
                { loading && <FormText color="muted">...loading</FormText>}
              </FormGroup>
            </Form>
          </Row>
        }
      </Container>
  )
}

export default Register;