import { FaBars } from "react-icons/fa";

function SecondaryNav() {
    return (
        <div className="text-white bg-[#085e43] flex gap-x-5 overflow-x-auto whitespace-nowrap hide-scroll">
            <div className="container mx-auto flex items-center gap-5 px-4 py-2 overflow-x-auto whitespace-nowrap">

                <div className="absolute left-1 flex items-center gap-1 cursor-pointer">
                    <FaBars />
                    <span className="font-semibold">All</span>
                </div>
                <a href="#" className="border border-transparent ml-2 hover:border-white p-1">Today's Deals</a>
                <a href="#" className="border border-transparent hover:border-white p-1">Customer Service</a>
                <a href="#" className="border border-transparent hover:border-white p-1">Registry</a>
                <a href="#" className="border border-transparent hover:border-white p-1">Gift Cards</a>
                <a href="#" className="border border-transparent hover:border-white p-1">Sell</a>
            </div>
        </div>

    )
}

export default SecondaryNav;