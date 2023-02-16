import Link from "next/link";
import React, { useState } from "react";
import { MdDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaShoppingCart, FaUserTie } from "react-icons/fa";
import { AiFillSetting, AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 bg-black min-h-screen relative px-4`}
      >
        {/* <Link 
          href="/"
          className={`text-[1.2rem] sm:text-2xl font-bold text-indigo-900 mt-6  ${!open && "hidden"} origin-left duration-300  `}
        >
          BOOK{" "}
          <span className="text-3xl sm:text-[2.5rem] italic text-sky-900	 font-bold sm:font-extrabold">
            S
          </span>
          TORE
        </Link> */}

        <div
          className={` mt-6  cursor-pointer flex  ${
            open ? "justify-end" : "justify-center"
          }`}
          onClick={() => setOpen(!open)}
        >
          <HiMenuAlt2 color="white" size="30px" className="cursor-pointer" />
        </div>

        <div
          className="mt-10  flex flex-col  relative   gap-4 
 "
        >
          <Link
            href="/admin/dashboard"
            className={`flex  items-center gap-x-4 hover:bg-gray-500 rounded-md text-lg font-medium p-2 text-white group `}
          >
            <MdDashboard
              className={`${!open && "justify-center"}`}
              color="white"
              size="30px"
            />
            <h2 className={` ${!open && "hidden"} origin-left duration-300 `}>
              Dashboard
            </h2>
            <h2
              className={` ${
                open && "hidden"
              }  absolute left-32 bg-slate-700	 font-semibold
             whitespace-pre rounded-md drop-shadow-lg px-0 w-0 py-0 overflow-hidden group-hover:px-2 text-white group-hover:py-1 group-hover:left-16 group-hover:duration-300 group-hover:w-fit`}
            >
              Dashboard
            </h2>
          </Link>

          <div className="flex flex-col gap-1 text-white text-lg mt-4 relative">
            <Link
              href="/admin/products"
              className={`flex  items-center gap-x-4 hover:bg-gray-500 group rounded-md text-lg font-medium p-2 `}
            >
              <MdProductionQuantityLimits color="white" size="30px" />
              <h2 className={` ${!open && "hidden"} origin-left duration-300 `}>
                Product
              </h2>
              <h2
                className={` ${
                  open && "hidden"
                }  absolute left-32 bg-slate-700	 font-semibold
             whitespace-pre rounded-md drop-shadow-lg px-0 w-0 py-0 overflow-hidden group-hover:px-2 text-white group-hover:py-1 group-hover:left-16 group-hover:duration-300 group-hover:w-fit`}
              >
                Product
              </h2>
            </Link>
            <Link
              href="/admin/order"
              className={`flex  items-center gap-x-4 hover:bg-gray-500 group rounded-md text-lg font-medium p-2`}
            >
              <FaShoppingCart color="white" size="30px" />
              <h2 className={` ${!open && "hidden"} origin-left duration-300 `}>
                Orders
              </h2>
              <h2
                className={` ${
                  open && "hidden"
                }  absolute left-32 bg-slate-700	 font-semibold
             whitespace-pre rounded-md drop-shadow-lg px-0 w-0 py-0 overflow-hidden group-hover:px-2 text-white group-hover:py-1 group-hover:left-16 group-hover:duration-300 group-hover:w-fit`}
              >
                Orders
              </h2>
            </Link>
            <Link
              href="/admin/user"
              className={`flex  items-center gap-x-4 hover:bg-gray-500 group rounded-md text-lg font-medium p-2`}
            >
              <FaUserTie color="white" size="30px" />
              <h2 className={` ${!open && "hidden"} origin-left duration-300 `}>
                User
              </h2>
              <h2
                className={` ${
                  open && "hidden"
                }  absolute left-32 bg-slate-700	 font-semibold
             whitespace-pre rounded-md drop-shadow-lg px-0 w-0 py-0 overflow-hidden group-hover:px-2 text-white group-hover:py-1 group-hover:left-16 group-hover:duration-300 group-hover:w-fit`}
              >
                User
              </h2>
            </Link>
          </div>

          <div className=" flex flex-col gap-1 text-white text-md mt-4">
            <Link
              href="/admin/profile"
              className={`flex  items-center gap-x-4 hover:bg-gray-500 group rounded-md text-[1.2rem] font-medium p-2  text-white`}
            >
              <CgProfile color="white" size="30px" />
              <h2 className={` ${!open && "hidden"} origin-left duration-300 `}>
                Profile
              </h2>
              <h2
                className={` ${
                  open && "hidden"
                }  absolute left-32 bg-slate-700	 font-semibold
             whitespace-pre rounded-md drop-shadow-lg px-0 w-0 py-0 overflow-hidden group-hover:px-2 text-white group-hover:py-1 group-hover:left-16 group-hover:duration-300 group-hover:w-fit`}
              >
                Profile
              </h2>
            </Link>

            <Link
              href="/admin/settings"
              className={`flex  items-center gap-x-4 hover:bg-gray-500 group rounded-md text-[1.2rem] font-medium p-2  text-white`}
            >
              <AiFillSetting color="white" size="30px" />
              <h2 className={` ${!open && "hidden"} origin-left duration-300 `}>
                Settings
              </h2>
              <h2
                className={` ${
                  open && "hidden"
                }  absolute left-32 bg-slate-700	 font-semibold
             whitespace-pre rounded-md drop-shadow-lg px-0 w-0 py-0 overflow-hidden group-hover:px-2 text-white group-hover:py-1 group-hover:left-16 group-hover:duration-300 group-hover:w-fit`}
              >
                Settings
              </h2>
            </Link>

            <Link
              href="/"
              className={`flex  items-center gap-x-4 hover:bg-gray-500 group rounded-md text-[1.2rem] font-medium p-2  text-white`}
            >
              <AiOutlineLogout color="white" size="30px" />
              <h2 className={` ${!open && "hidden"} origin-left duration-300 `}>
                Logout
              </h2>
              <h2
                className={` ${
                  open && "hidden"
                }  absolute left-32 bg-slate-700	 font-semibold
             whitespace-pre rounded-md drop-shadow-lg px-0 w-0 py-0 overflow-hidden group-hover:px-2 text-white group-hover:py-1 group-hover:left-16 group-hover:duration-300 group-hover:w-fit`}
              >
                Logout
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
