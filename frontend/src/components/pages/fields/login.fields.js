const login_fields = {
  username: {
    value: '',
    valid: false,
    invalid: false,
    validationRules: {
        minLength: 4,
        isRequired: true
    },
  },
  password: {
    value: '',
    valid: false,
    invalid: false,
    validationRules: {
        minLength: 1,
        isRequired: true
    },
  },
}
export default login_fields