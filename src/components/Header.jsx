import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="logo.png"
              alt="company logo"
            />
          </a>
        </div>
        <div className="flex lg:flex-1 lg:justify-end">
          <Link to={'/'} className="flex items-center mx-2 px-4 py-2 font-small text-green-600 bg-transparent border border-green-600 rounded hover:bg-green-600 hover:text-white hover:border-transparent focus:outline-none">
            <span>Create Room</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
