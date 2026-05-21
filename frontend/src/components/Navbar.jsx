import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-neutral-800">
      <h1 className="text-2xl font-bold">
        TokenWise
      </h1>
      <Link
        to="/audit"
        className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-neutral-200 transition"
      >
        Start Audit
      </Link>
    </nav>
  );
}

export default Navbar;