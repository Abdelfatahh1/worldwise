import PropTypes from "prop-types";
function Button({ children, onClick, type }) {
  return (
    <button
      style={{ zIndex: `${type === "position" ? "-1" : "1000"}` }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired, // node يعني أي شيء يمكن رندرته
};
export default Button;
