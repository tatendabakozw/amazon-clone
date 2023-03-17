import { data } from "@utils/data";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" bg-primary-light flex flex-col w-full">
      <div className="bg-primary-superlight">
        <p className="text-center capitalize text-white p-4">back to top</p>
      </div>
      <div className="max-w-7xl grid md:grid-cols-4 grid-cols-2 gap-8 mx-auto w-full md:p-16 p-8">
        <div className="col-span-1 flex flex-col space-y-1 text-slate-100 text-sm">
          <p className="capitalize font-bold text-white text-md">Get to know us</p>
          <p>Carrers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p>Amazon Science</p>
        </div>
        <div className="col-span-1 flex flex-col space-y-1 text-slate-100 text-sm">
          <p className="capitalize font-bold text-white text-md">Make money with us</p>
          <p>Sell products on Amazon</p>
          <p>Sell on Amazon Business</p>
          <p>Sell apps on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
          <p>Self-Publish with Us</p>
          <p>Host an Amazon Hub</p>
        </div>
        <div className="col-span-1 flex flex-col space-y-1 text-slate-100 text-sm">
          <p className="capitalize font-bold text-white text-md">
            Amazon Payment Products
          </p>
          <p>Amazon Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>
        <div className="col-span-1 flex flex-col space-y-1 text-slate-100 text-sm">
          <p className="capitalize font-bold text-white text-md">Let Us Help You</p>
          <p>Amazon and COVID-19</p>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Returns & Replacements</p>
          <p>Manage Your Content and Devices</p>
          <p>Amazon Assistant</p>
          <p>Help</p>


        </div>
      </div>
      <div className="border-t py-4 border-primary-superlight w-full"></div>
      <div className="flex max-w-7xl pb-8 flex-row items-center justify-between mx-auto w-full px-24">
        <img src={data.site_info.logo} className="h-12" alt="" />
      </div>
    </div>
  );
};

export default Footer;
