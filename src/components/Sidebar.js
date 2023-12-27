import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { FaBookOpen } from "react-icons/fa";

const sidebarTag = [
  {
    name: "Students",
    icon: <IoPersonOutline className="text-4xl mx-auto" />,
  },
  {
    name: "Lesson",
    icon: <FaBookOpen className="text-4xl mx-auto" />,
  },
  {
    name: "Settings",
    icon: <CiSettings className="text-4xl mx-auto" />,
  },
];

export default function Sidebar() {
  return (
    <nav className="w-[125px] h-screen bg-white shadow-xl z-10">
      <div className="w-full flex flex-col justify-center">
        <div className="pt-10 pb-5 border-b border-r ">
          <FaRegCircle className="text-4xl mx-auto" />
        </div>

        <ul className="flex flex-col text-blue-500">
          {sidebarTag.map((tag, index) => (
            <li key={index} className="cursor-pointer py-5 border-l-4 hover:border-blue-400 hover:text-black hover:bg-[#e2eaef] ">
              {tag.icon}
              <p className="text-center">{tag.name}</p>
            </li>
          ))}

        </ul>
      </div>
    </nav>
  );
}
