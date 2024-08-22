import { RxDashboard } from "react-icons/rx";
import { IoMdClipboard } from "react-icons/io";
import { MdOutlineInventory2 } from "react-icons/md";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function Sidebar() {
    const links = [
        {label: "Dashboard", icon: <RxDashboard />},
        {label: "Inventory", icon: <IoMdClipboard />},
        {label: "Products", icon: <MdOutlineInventory2 />},
        {label: "About", icon: <HiOutlineExclamationCircle />},

    ]
  return (
    <div className="w-52 h-screen bg-white flex flex-col justify-start items-start pl-5 pt-5 gap-5 shadow-md">
        {links && links.map((item, index) =>
            <p key={index} className="text-xl flex justify-center items-center gap-2 cursor-pointer text-green-800 hover:font-bold hover:text-black">
                <span className="text-2xl">{item?.icon}</span>
                {item?.label}
            </p>
        )}
    </div>
  );
}
