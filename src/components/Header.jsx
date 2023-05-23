
// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ]

export default function Header() {

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          {/* <div className="lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div> */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className="flex items-center mx-2 px-4 py-2 font-small text-indigo-600 bg-transparent border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white hover:border-transparent focus:outline-none">
            
            <span>Join Room</span>
          </button>
          <button className="flex items-center mx-2 px-4 py-2 font-small text-green-600 bg-transparent border border-green-600 rounded hover:bg-green-600 hover:text-white hover:border-transparent focus:outline-none">
            
            <span>Create Room</span>
          </button>
          </div>
        </nav>

      </header>

    </div>
  )
}
