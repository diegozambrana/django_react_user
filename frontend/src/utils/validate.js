const validate = (value, rules) => {
  let isValid = true;

  for (let rule in rules) {

    switch (rule) {
      case 'minLength': isValid = isValid && minLengthValidator(value, rules[rule]); break;

      case 'maxLength': isValid = isValid && maxLengthValidator(value, rules[rule]); break;

      case 'isRequired': isValid = isValid && requiredValidator(value); break;

      case 'isEmail': isValid = isValid && emailValidator(value); break;

      default: isValid = true;
    }

  }

  return isValid;
}

const minLengthValidator = (value, minLength) => {
  return value.length >= minLength;
}

const maxLengthValidator = (value, maxLength) => {
  return value.length <= maxLength;
}

const requiredValidator = value => {
  return value.trim() !== ''; 
}

const emailValidator = value => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}

export const validateForm = (formControl) => {
  let isValidForm = true;
  Object.keys(formControl).forEach(key => {
    isValidForm = isValidForm && formControl[key].valid;
  })
  return isValidForm;
}

export const validateFormField = (formControl, field, value) => {
  let fields = formControl;
  fields[field].value = value;
  fields[field].valid = validate(value, fields[field].validationRules);
  fields[field].invalid = !fields[field].valid
  return fields;
}


export default validate;