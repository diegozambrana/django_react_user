const register_fields = {
  email: {
    value: '',
    valid: false,
    invalid: false,
    validationRules: {
        minLength: 7,
        isRequired: true,
        isEmail: true,
    },
  },
  first_name: {
    value: '',
    valid: false,
    invalid: false,
    validationRules: {
        minLength: 3,
        isRequired: true
    },
  },
  last_name: {
    value: '',
    valid: false,
    invalid: false,
    validationRules: {
        minLength: 3,
        isRequired: true
    },
  },
  password: {
    value: '',
    valid: false,
    invalid: false,
    validationRules: {
        minLength: 6,
        isRequired: true
    },
  },
  confirm: {
    value: '',
    valid: false,
    invalid: false,
    validationRules: {
        minLength: 6,
        isRequired: true
    },
  },
}
export default register_fields