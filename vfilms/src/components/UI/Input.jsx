import { forwardRef } from 'react';
import PropTypes from 'prop-types'; // Added for prop-type validation
import FieldError from './FieldError.jsx';

const Input = forwardRef(
  ({ label, error, id, className = '', ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s/g, '-');

    return (
      <div className="w-full">
        <label htmlFor={inputId} className="block text-sm font-medium text-ink mb-1.5">
          {label}
          {props.required && <span className="text-accent ml-1">*</span>}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`w-full px-4 py-2.5 border rounded-md bg-white text-ink placeholder:text-muted/50 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
            error ? 'border-red-500' : 'border-muted/30'
          } ${className}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && <FieldError id={`${inputId}-error`} message={error} />}
      </div>
    );
  }
);

Input.displayName = 'Input';

// Added PropTypes for .jsx
Input.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
};

export default Input;