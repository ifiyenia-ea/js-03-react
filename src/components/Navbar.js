const Navbar = ({ show }) => {
  return (
    <div className={show ? "nav-active" : "nav"}>
      <ul className="ul">
        <li className="li">
          <a href="#">home</a>
        </li>
        <li className="li">
          <a href="#">services</a>
        </li>
        <li className="li">
          <a href="#">gallery</a>
        </li>
        <li className="li">
          <a href="#">contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
