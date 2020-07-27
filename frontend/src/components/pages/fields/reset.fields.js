const reset_fields = {
  new_password1: {
    value: '',
    valid: false,
    invalid: false,
    validationRules: {
        isRequired: true,
        minLength: 6,
    },
  },
  new_password2: {
    value: '',
    valid: false,
    invalid: false,
    validationRules: {
        isRequired: true,
        minLength: 6,
    },
  },
}
export default reset_fields;