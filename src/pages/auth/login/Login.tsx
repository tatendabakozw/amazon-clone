import { data } from "@utils/data";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import YellowButton from "src/buttons/YellowButton";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");

  const login_user = () => {
    console.log(email);
  };

  return (
    <div className="w-full flex flex-col ">
      <img src={data.site_info.dark_logo} className="w-32 self-center" alt="" />
      <div className=" self-center w-1/4 border border-slate-300 p-8 rounded flex flex-col">
        <p className="text-xl text-slate-900 font-semibold">Sign in</p>
        <p className="pt-4 text-sm font-semibold text-lsate-900">
          Email or mobile phone number
        </p>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 mb-2 border border-slate-300 rounded"
        />
        <YellowButton onClick={login_user} text={"Continue"} />
        <p className="text-xs py-2">
          By continuing, you agree to Amazon's{" "}
          <span className="text-blue-700">Conditions of Use</span> and{" "}
          <span className="text-blue-700">Privacy Notice</span>.
        </p>
        <p className="text-blue-700 text-xs">Need help?</p>
      </div>
      <div className="flex self-center py-4 flex-row items-center w-1/4">
        <div className="border-t border-slate-200 flex-1"></div>
        <p className="text-sm text-slate-500">New to Amazon?</p>
        <div className="border-t flex-1 border-slate-200"></div>
      </div>
      <Link to='/register' className="w-1/4 self-center border border-slate-300 cursor-pointer hover:bg-slate-100 text-sm p-2 rounded">
        <p className="text-center">Create your amazon account</p>
      </Link>
    </div>
  );
};

export default Login;
