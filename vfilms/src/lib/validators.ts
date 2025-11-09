export function isEmail(value: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

export function normalizePhone(value: string): string {
  // Strip to digits only
  return value.replace(/[^0-9]/g, '');
}

export type ValidationErrors = Partial<Record<'name' | 'email' | 'phone' | 'message', string>>;

export function validateContact(values: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!isEmail(values.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!values.phone.trim()) {
    errors.phone = 'Phone is required';
  } else {
    const normalized = normalizePhone(values.phone);
    if (normalized.length < 7 || normalized.length > 15) {
      errors.phone = 'Phone number must be between 7 and 15 digits';
    }
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
}
