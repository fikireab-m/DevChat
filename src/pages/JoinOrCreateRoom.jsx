import { useNavigate } from "react-router-dom";
import play_icon from "../assets/play_gradient.png";
import { useState } from "react";

export default function JoinOrCreateRoom() {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username.length > 0 && roomName.length > 0) {
      navigate("/chat",{state: {props:{user:username,channelName:roomName}}});
    }
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 pt-24 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-16 w-16" src="logo.png" alt="DevChat" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Join Or Create a room
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="flex flex-col  space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Your Name
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="User Name"
                type="text"
                autoSave=""
                onChange={(event) => setUsername(event.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="roomname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Room Name
              </label>
            </div>
            <div className="mt-2">
              <input
                id="roomname"
                name="Room Name"
                type="text"
                autoSave=""
                onChange={(event) => setRoomName(event.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="self-end rounded-full bg-transparent border border-blue-600 text-blue-600 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 shadow-sm hover:bg-blue-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <img className="h-8 w-8 transform " src={play_icon} />
          </button>
        </form>
      </div>
    </div>
  );
}
