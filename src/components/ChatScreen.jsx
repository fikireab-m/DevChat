
const messages = [
  {
    sender: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    message: "Hello there!",
    time: "2022-11-01T12:00:00",
  },
  {
    sender: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    message: "Hi Alice, how are you?",
    time: "2022-11-01T12:05:00",
  },
  {
    sender: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    message: "I am doing well, thanks for asking. How about you?",
    time: "2022-11-01T12:10:00",
  },
  {
    sender: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    time: "2022-11-01T12:15:00",
  },
  {
    sender: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    message: "That is good to hear.",
    time: "2022-11-01T12:20:00",
  },
];
export default function ChatsScreen() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {messages.map((message, index) => (
        <li key={index} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={message.imageUrl}
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {message.sender}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {message.message}
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                <time dateTime={message.time}>{message.time}</time>
              </p>
            </div>
          </div>
        </li>
      ))}
      <li>
        <div className="flex">
          <div className="col-span-full flex-grow mt-2">
            <textarea
              id="about"
              name="about"
              placeholder="Write your message here "
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </li>
    </ul>
  );
}
