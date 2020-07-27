import React, { useState } from 'react';
import { 
  Container,
  Row,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import { validateForm, validateFormField } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';
import forgot_fields from './fields/forgot.fields';
import passwordResetRequest from '../../actions/auth/passwordResetRequest'

const Forgot = (props) => {
  let [formControl, setFormControl] = useState(forgot_fields);
  const dispatch = useDispatch();
  const successMessage = useSelector(state => state.passwordResetRequestMessage);

  const onSubmit = (event) => {
    event.preventDefault();

    // check if all fields of form are valid
    let isValidForm = validateForm(formControl);

    if(isValidForm){
      let data = { "email": formControl.email.value }
      dispatch(passwordResetRequest(data));
    }
  }

  const onChangeHandler = (value, field) => {
    setFormControl(validateFormField(formControl, field, value));
  }

  return (
    <Container>
      <Row>
        <h1>Reset Password</h1>
      </Row>
      <Row>
        {successMessage && 
          <p>{successMessage}</p>
        }
        {!successMessage && 
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Input
                type="text"
                name="email"
                placeholder="e-mail"
                id="email"
                onChange={e => onChangeHandler(e.target.value, 'email')}
                valid={formControl.email.valid}
                valid={formControl.email.invalid}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="submit"
                name="reset_button"
                id="reset_button"
                value="Submit"
              />
            </FormGroup>
          </Form>
        }
      </Row>
    </Container>
  )
}

export default Forgot;