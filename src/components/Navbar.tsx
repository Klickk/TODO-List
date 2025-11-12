export const Navbar = () => {
  return (
    <nav className="bg-purple-700  p-4 text-white items-start justify-start flex">
      <a className="text-xl hover:text-purple-300 mx-6 font-bold" href="/">
        Home
      </a>
      <a className="text-xl hover:text-purple-300 mr-6 font-bold" href="/todo">
        To Do
      </a>
      <a className="text-xl hover:text-purple-300 font-bold" href="/about">
        About
      </a>
    </nav>
  );
};
