import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import { validateForm, validateFormField } from '../../utils';
import {useParams} from 'react-router-dom';
import {reset_fields} from './fields';
import { useSelector, useDispatch } from 'react-redux';
import passwordReset from '../../actions/auth/passwordReset';
import passwordResetCheck from '../../actions/auth/passwordResetCheck'


const Reset = () => {

  let {uid, token} = useParams()
  let [formControl, setFormControl] = useState(reset_fields);

  const successMessage = useSelector(state => state.passwordResetMessage);
  const errorMessage = useSelector(state => state.passwordResetMessageErrors);
  const passwordResetCheckMessage = useSelector(state => state.passwordResetCheckMessage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(passwordResetCheck(uid, token))
  }, [])
  
  const onSubmit = (event) => {
    event.preventDefault();

    let isValidForm = validateForm(formControl) && formControl.new_password1.value == formControl.new_password2.value;
    console.log(isValidForm);

    if(isValidForm){
      let data = {
        "new_password1": formControl.new_password1.value,
        "new_password2": formControl.new_password2.value
      }

      dispatch(passwordReset(data, uid, token));
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

      {passwordResetCheckMessage.status === 'fail' && (
        <Row>
          <p>{passwordResetCheckMessage.message}</p>
        </Row>
      )}

      {successMessage && (
        <Row>
          <p>{successMessage}</p>
        </Row>
      )}

      {passwordResetCheckMessage.status === 'ok' && !successMessage && (
        <>
          <Row>
            <p>{passwordResetCheckMessage.message}</p>
          </Row>

          {errorMessage.new_password2 && (
            <Row>
              <ul>
                { errorMessage.new_password2.map((d, index) => <li key={`error_reset_${index}`}>{d}</li>)}
              </ul>
            </Row>
          )}

          <Row>
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Input
                  type="password"
                  name="new_password1"
                  placeholder="Password"
                  id="new_password1"
                  onChange={e => onChangeHandler(e.target.value, 'new_password1')}
                  valid={formControl.new_password1.valid}
                  valid={formControl.new_password1.invalid}
                />
                <Input
                  type="password"
                  name="new_password2"
                  placeholder="Password Confirm"
                  id="new_password2"
                  onChange={e => onChangeHandler(e.target.value, 'new_password2')}
                  valid={formControl.new_password2.valid}
                  valid={formControl.new_password2.invalid}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="submit"
                  name="reset_button"
                  id="reset_button"
                  value="Reset Password"
                />
              </FormGroup>
            </Form>
          </Row>
        </>
      )}

    </Container>
  )
}

export default Reset;