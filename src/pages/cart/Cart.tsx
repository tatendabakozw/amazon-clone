import GeneralLayout from "@layouts/GeneralLayout";
import React, { useContext } from "react";
import empty_cart from "@assets/exmpty_cart.svg";
import { Link } from "react-router-dom";
import { Store } from "@context/Store";

type Props = {};

const Cart = (props: Props) => {
  // @ts-ignore
  const {state} = useContext(Store)
  return (
    <GeneralLayout>
      <div className="min-h-screen bg-slate-100 p-4">
        <div className="flex flex-row space-x-8 bg-white max-w-7xl p-8 mx-auto w-full rounded">
          <img src={empty_cart} alt="" className="w-96" />
          <div className="flex flex-col">
            <p className="text-2xl text-slate-900 font-semibold">
              Your Amazon Cart is empty
            </p>
            <p className="text-blue-700 text-sm">Shop today's deals</p>
            <div className="flex flex-row py-4 space-x-2">
              <Link to="/login" className="bg-secondary-original p-2 rounded">
                <p>Sign in to your account</p>
              </Link>
              <Link
                to="/register"
                className="border border-slate-300 p-2 rounded"
              >
                <p>Sign up now</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default Cart;
