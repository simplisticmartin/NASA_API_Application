/** @format */

export const Navbar = ({ openRegistrationModal }) => {
  return (
    <div className="navbar">
      <div className="navbar-button">Login/Switch User</div>
      <div
        className="navbar-button"
        onClick={() => {
          openRegistrationModal(true);
        }}
      >
        Create User
      </div>
    </div>
  );
};
