const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <div>
        <a href="lobby.html">
          <h3 id="logo">
            <img src="vite.svg" alt="Site Logo" />
            <span>DevChat</span>
          </h3>
        </a>
      </div>
      <nav>
        <div className="flex">
          <button className="flex items-center mx-2 px-4 font-small text-indigo-600 bg-transparent border border-indigo-600 rounded-l hover:bg-indigo-600 hover:text-white hover:border-transparent focus:outline-none">
            {/* <FaCheck className="mr-2" /> */}
            <span>Join Room</span>
          </button>
          <button className="flex items-center mx-2 px-4 font-small text-green-600 bg-transparent border border-green-600 rounded-l hover:bg-green-600 hover:text-white hover:border-transparent focus:outline-none">
            {/* <FaTrash className="mr-2" />  */}
            <span>Create Room</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
