import PropTypes from 'prop-types'; // Added for prop-type validation

export default function FieldError({ message, id }) {
  return (
    <p id={id} className="mt-1.5 text-sm text-red-600" role="alert">
      {message}
    </p>
  );
}

// Added PropTypes for .jsx
FieldError.propTypes = {
  message: PropTypes.string.isRequired,
  id: PropTypes.string,
};