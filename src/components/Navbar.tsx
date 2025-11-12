import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-purple-700 sticky p-4 text-white items-start justify-start flex">
      <Link
        className="text-xl hover:text-purple-300 mx-6 border-r-2 pr-5 border-purple-300 font-medium"
        to="/"
      >
        Home
      </Link>
      <Link
        className="text-xl hover:text-purple-300 border-r-2 pr-5 border-purple-300 mr-6 font-medium"
        to="/todo"
      >
        To do list
      </Link>
      <Link className="text-xl hover:text-purple-300 font-medium" to="/about">
        About
      </Link>
    </nav>
  );
};
