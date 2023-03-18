import GeneralLayout from "@layouts/GeneralLayout";
import React, { useContext } from "react";
import empty_cart from "@assets/exmpty_cart.svg";
import { Link } from "react-router-dom";
import { Store } from "@context/Store";
import { Text } from "@chakra-ui/react";
import YellowButton from "src/buttons/YellowButton";

type Props = {};

const Cart = (props: Props) => {
  // @ts-ignore
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const updateCartHandler = async (item: any, value: any) => {
    // const { data } = await axios.get(`/api/products/${item?._id}`)
    // if (data?.countInStock <= 0) {
    //     alert('Sorry. Product out of stock')
    //     return
    // }
    dispatch({ type: "ADD_TO_CART", payload: { ...item, quantity: value } });
  };
  const remove_from_cart = (item: any) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { ...item } });
  };

  // console.log(cart);

  return (
    <GeneralLayout>
      <div className="min-h-screen bg-slate-100 p-4">
        {cart?.cartItems.length < 1 && (
          <>
            <div className="flex flex-row space-x-8 bg-white max-w-7xl p-8 mx-auto w-full rounded">
              <img src={empty_cart} alt="" className="w-96" />
              <div className="flex flex-col">
                <p className="text-2xl text-slate-900 font-semibold">
                  Your Amazon Cart is empty
                </p>
                <Link to="/explore" className="text-blue-700 text-sm">
                  Shop today's deals
                </Link>
                <div className="flex flex-row py-4 space-x-2">
                  <Link
                    to="/login"
                    className="bg-secondary-original p-2 rounded"
                  >
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
          </>
        )}
        {cart?.cartItems.length >= 1 && (
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-5 grid-cols-1 gap-8">
            <div className="flex flex-col col-span-4 bg-white p-4">
              <div className="flex flex-row justify-between items-end border-b border-slate-300 pb-4 mb-4">
                <p className="text-slate-900 font-semibold text-2xl">
                  Shopping Cart
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                {cart.cartItems.map((item: any, index: number) => (
                  <div key={index} className="flex flex-row space-x-4">
                    <div className="bg-slate-100 w-40 h-40 grid items-center justify-center">
                      <img
                        src={item.pictures[0]}
                        alt=""
                        className=" object-contain h-40"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Text
                        noOfLines={3}
                        className="font-semibold text-slate-700"
                      >
                        {item.title}
                      </Text>
                      <p className="text-sm">{item.category.name}</p>
                      <p className="text-sm">{item.price}</p>
                      <div className="flex-1"></div>
                      <div className="flex flex-row items-center space-x-2">
                        <select
                          defaultValue={item.quantity}
                          title="quantity"
                          onChange={(e) =>
                            updateCartHandler(item, e.target.value)
                          }
                          // value={product.quantity}
                          className={
                            "outline-none border--gray-200 rounded bg-gray-100"
                          }
                        >
                          {/*@ts-ignore*/}
                          {[...Array(10).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                        <div
                          onClick={() => remove_from_cart(item)}
                          className="flex cursor-pointer hover:text-blue-500 text-blue-600 text-sm px-4"
                        >
                          Delete
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <div className="flex flex-col bg-white p-4">
                <p className="pb-8">
                  Subtotal (
                  {cart?.cartItems?.reduce(
                    (a: any, c: any) => parseInt(a) + parseInt(c.quantity),
                    0
                  )}{" "}
                  item):{" "}
                  <span className="font-semibold">
                    ($
                    {cart?.cartItems?.reduce(
                      (a: any, c: any) =>
                        parseFloat(a) +
                        parseFloat(c.quantity) * parseFloat(c.price),
                      0
                    )}
                    )
                  </span>
                </p>
                <YellowButton text={"Proceed to checkout"} />
              </div>
            </div>
          </div>
        )}
      </div>
    </GeneralLayout>
  );
};

export default Cart;
