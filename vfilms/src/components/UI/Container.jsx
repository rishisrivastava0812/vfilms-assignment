import PropTypes from 'prop-types'; // Added for prop-type validation

export default function Container({ children, className = '', id }) {
  return (
    <div id={id} className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

// Added PropTypes for .jsx
Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};