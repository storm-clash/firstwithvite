import PropTypes from "prop-types";
function Student({ name = "Guest", age = 0, isStudent = false }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Name: {age}</p>
      <p>Name: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

/*PropTypes if for regulate the values that can be passed in a prop */
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

/*
defaultProps = default values for props in case they are not passed from the parent component
*/

// Student.defaultProps = {
//     name: "Guest",
//     age: 0,
//     isStudent : false
// }

export default Student;
