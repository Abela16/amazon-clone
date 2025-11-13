import { FaSearch, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";

function Navbar() {
  return (
    <header className="bg-[#131921] text-white">
      <div className="container flex items-center justify-between py-2 gap-1 pl-6 ">


        <div className="flex items-center gap-2 cursor-pointer text-white-400 pl-200px">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
            className="w-24 invert"
          />
        </div>

        <div className="flex items-center gap-1 cursor-pointer">
          <FaMapMarkerAlt className="text-xl text-black-300" />
          <div className="leading-tight">
            <p className="text-xs text-gray-300">Deliver to</p>
            <p className="font-bold">Ethiopia</p>
          </div>
        </div>

        <div className="flex flex-grow max-w-[900px]">
          <select className="bg-gray-200 text-black text-xs  rounded-l-md outline-none">
            <option>All</option>
            <option>Books</option>
            <option>Electronics</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon"
            className="flex-grow p-2 outline-none text-black bg-white"
          />
          <button className="bg-[#febd69] px-3 rounded-r-md">
            <FaSearch className="text-black text-lg" />
          </button>
        </div>
        <div>
          <select className="text-white bg-transparent p-2 rounded ">
            <div className="text-black">
            <option>Eng</option>
            <option>Amh</option>
            <option>Es</option>
            </div>
          </select>
        </div>

        <div className="text-sm leading-tight cursor-pointer">
          <p>Hello, sign in</p>
          <p className="font-bold">Account & Lists</p>
        </div>

        <div className="text-sm leading-tight cursor-pointer">
          <p>Returns</p>
          <p className="font-bold">& Orders</p>
        </div>

        <div className="flex items-center gap-1 cursor-pointer">
          <FaShoppingCart className="text-3xl" />
          <span className="font-bold mt-2">Cart</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
