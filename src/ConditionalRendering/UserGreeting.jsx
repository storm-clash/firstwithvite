import PropTypes from "prop-types";

function UserGreeting(props) {
  const welcomeMessage = <h2>Welcome {props.username}</h2>;
  const logInProp = <h2>Please log in to continue</h2>;
  return props.isLoggedIn ? welcomeMessage : logInProp;
}

UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};
export default UserGreeting;
