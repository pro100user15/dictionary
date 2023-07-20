export const emailValidation = {
  required: 'Email cannot be empty',
  validate: (value) => {
    const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regexp.test(String(value).toLowerCase())) {
      return 'Email does not comply with the rules';
    }
    return true;
  }
};

export const phoneValidation = {
  required: 'The phone number cannot be empty',
  validate: (value) => {
    const regexp = /^(\+?38)?(\(\d{3}\))?\d{10}$/;
    if (!regexp.test(String(value).toLowerCase())) {
      return 'The phone number does not comply with the rules';
    }
    return true;
  }
};

export const passwordValidation = {
  required: 'The password cannot be empty',
  validate: (value) => {
    const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/;
    if (value.length < 8 || value.length > 64) {
      return 'The password must be between 8 and 64 characters';
    } else if (!regexp.test(value)) {
      return 'The password must contain upper and lower case letters, numbers and special characters';
    }
    return true;
  }
};
