import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar bg-base-100 text-black bg-yellow-800 rounded-2xl font-extrabold text-9xl mt-12 mb-6">
      <div className="navbar-center hidden lg:flex flex align-middle mx-auto items-center justify-center">
        <ul className="menu menu-horizontal px-1">
          
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/addCoffee">Add Coffee</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
