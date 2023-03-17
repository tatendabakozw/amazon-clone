import { data } from "@utils/data";
import React, { useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  MapPinIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import america_flag from "@assets/flag-america.svg";
import DesktopNavDrawer from "../drawers/DesktopNavDrawer";

type Props = {};

function Navbar({}: Props) {
  const [navbar, setNavbar] = useState<boolean>(false);
  return (
    <nav className="flex flex-col w-full">
      <div className="w-full bg-primary-original shadow text-white">
        <div className="flex flex-row space-x-8 px-4 py-2 items-center justify-between w-full flex-1">
          <a href="/">
            {/* <h2 className="text-2xl font-bold text-white">LOGO</h2> */}
            <img src={data.site_info.logo} alt="logo" className="h-10" />
          </a>
          <div className="flex flex-row items-center space-x-2">
            <MapPinIcon height={20} width={20} />
            <div className="flex flex-col items-start space-y<-0">
              <p className="text-xs">Deliver to</p>
              <p className="font-semibold">Harare</p>
            </div>
          </div>
          {/* navbar searcg */}
          <div className="flex-row flex items-center rounded flex-1">
            <select
              name="categories"
              id="categories"
              className="text-slate-900 bg-gray-200 rounded-l p-2 text-xs"
            >
              <option hidden value="">
                All
              </option>
              {data.categories.map((item, index) => (
                <option key={index} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              className=" bg-white p-2 text-xs outline-none flex-1"
              placeholder="Search Amazon"
            />
            <div className="flex bg-secondary-original rounded-r text-slate-900 p-2">
              <MagnifyingGlassIcon height={16} width={16} />
            </div>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <img src={america_flag} alt="american flag" className="w-6" />
            <p className="font-semibold text-sm">EN</p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs">Hello, sign in</p>
            <p className="font-semibold">Account & Lists</p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs">Returns</p>
            <p className="font-semibold">& Orders</p>
          </div>
          <div className="flex flex-row items-center">
            <ShoppingCartIcon height={24} width={24} />
            <p className="font-semibold">Cart</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-4 bg-primary-light text-white px-4 py-2">
        <>
          <DesktopNavDrawer />
        </>
        <p className="text-sm cursor-pointer">Today's Deals</p>
        <p className="text-sm cursor-pointer">Customer Service</p>
        <p className="text-sm cursor-pointer">Registry</p>
        <p className="text-sm cursor-pointer">Gift Cards</p>
        <p className="text-sm cursor-pointer">Sell</p>
        <div className="flex-1"></div>
        <p className="text-sm font-semibold cursor-pointer">
          Shop deals in Electronics
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
