import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="container d-flex justify-content-around mt-4">
        <li>
          <Link to="/">&lt; Home &gt;</Link>
        </li>
        <li>
          <Link to="/instructors">&lt; Instructors &gt;</Link>
        </li>
        <li>
          <Link to="/contact">&lt; Contact &gt;</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
