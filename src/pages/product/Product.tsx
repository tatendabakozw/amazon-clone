import { Avatar, Divider, Spinner, useToast } from "@chakra-ui/react";
// @ts-ignore
import React, { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Tab } from "@headlessui/react";
import RatingComponent from "@components/rating-component/RatingComponent";
import YellowButton from "src/buttons/YellowButton";
import {
  InformationCircleIcon,
  PlusIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { findFromArray } from "@helpers/arrayMethods";
import { products } from "@utils/products";
import GeneralLayout from "@layouts/GeneralLayout";
import Amount from "@components/amount/Amount";
import { Store } from "@context/Store";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {};

function Product({}: Props) {
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selected_variant, setSelectedVariant] = useState<any>();
  const [show_features, setShowFeatures] = useState<boolean>(false);
  // @ts-ignore
  const { dispatch } = useContext(Store);
  const [showMore, setShowMore] = useState<any>();
  const [searchParams, setSearchParams] = useSearchParams("");

  const product_id = searchParams.get("p_id");

  // for toast
  const toast = useToast();

  const add_to_basket = async () => {
    try {
      setLoading(true);

      // if (data?.countInStock <= 0) {
      //   alert('Sorry. Product our of stock')
      //   return
      // }
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...props, quantity: 1 },
      });
      toast({
        title: `Added to cart.`,
        position: "top-right",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //   @ts-ignore
  const props = findFromArray(products, product_id);

  const buy_item_now = async () => {
    // try {
    //   setLoading(true)
    //   const { data } = await axios.get(
    //     `/api/products/${props._id}`
    //   )
    //   if (data?.countInStock <= 0) {
    //     alert('Sorry. Product our of stock')
    //     return
    //   }
    //   dispatch({
    //     type: 'ADD_TO_CART',
    //     payload: { ...props, quantity: 1 },
    //   })
    //   setLoading(false)
    //   toast({
    //     title: `${props.title} added to cart.`,
    //     position: 'top-right',
    //     status: 'success',
    //     duration: 9000,
    //     isClosable: true,
    //   })
    //   history.push('/shipping')
    // } catch (error) {
    //   setLoading(false)
    //   console.log(error)
    // }
  };

  return (
    <GeneralLayout>
      <div className="bg-slate-100 p-4">
        <div className="flex max-w-7xl flex-col w-full mx-auto bg-gray-100">
          <div className="mx-auto w-full flex-1 rounded ">
            <div className="mx-auto max-w-2xl md:px-0  md:pb-8 lg:max-w-7xl lg:px-0">
              <div className="lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-8">
                {/* Image gallery */}
                <Tab.Group
                  as="div"
                  className="col-span-2 flex flex-col-reverse rounded-lg bg-white p-4 md:p-8"
                >
                  {/* Image selector */}
                  <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
                    <Tab.List className="grid grid-cols-4 gap-2 md:grid-cols-8">
                      {props.pictures?.map((image: any, index: number) => (
                        <Tab
                          key={index}
                          className="relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-md bg-gray-100 text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                        >
                          {({ selected }) => (
                            <>
                              <span className="sr-only">{"image"}</span>
                              <span className="absolute inset-0 overflow-hidden rounded-md">
                                <img
                                  src={image}
                                  alt="for a single props"
                                  className="h-full w-full rounded object-contain object-center"
                                />
                              </span>
                              <span
                                className={classNames(
                                  selected
                                    ? "ring-blue-primary"
                                    : "ring-transparent",
                                  "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                                )}
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>

                  <Tab.Panels className="aspect-w-1 aspect-h-1 max-h-[750px] w-full flex-1 overflow-hidden rounded-lg">
                    {props.pictures?.map((image: any, index: number) => (
                      <Tab.Panel
                        key={index}
                        className="grid items-center content-center justify-center rounded"
                      >
                        <img
                          src={image}
                          alt={"for the props"}
                          className="bg-gray-100 object-center object-contain sm:rounded-lg"
                        />
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                {/* Product info */}
                <div className="mt-10 rounded sm:mt-16 sm:px-0 lg:mt-0">
                  <div className="flex flex-col rounded bg-white px-2 py-4 md:px-8">
                    <h2 className=" text-sm font-semibold tracking-tight text-gray-400">
                      {props.category.name}
                    </h2>
                    <h1 className="text-xl font-bold uppercase tracking-tight text-gray-900 md:text-3xl">
                      {props.title}
                    </h1>

                    {/* Reviews */}
                    <div className="mt-2">
                      <h3 className="sr-only">Reviews</h3>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <RatingComponent
                            ratings={Math.floor(props.avg_rating)}
                          />
                        </div>
                        <p className="sr-only">
                          {props.avg_rating} out of 5 stars
                        </p>
                      </div>
                    </div>

                    <div className="my-3">
                      <h6 className="sr-only">Product information</h6>
                      <div className="flex flex-row items-center gap-4">
                        {selected_variant ? (
                          <Amount
                            className="text-2xl font-bold text-gray-700"
                            amount={
                              parseFloat(selected_variant?.price) -
                              parseFloat(selected_variant?.discount_price)
                            }
                          />
                        ) : (
                          <Amount
                            className="text-2xl font-bold text-gray-700"
                            amount={
                              parseFloat(props.price) -
                              parseFloat(props.discount_price)
                            }
                          />
                        )}
                        {selected_variant ? (
                          <Amount
                            className="text-xl text-gray-300 line-through"
                            amount={parseFloat(selected_variant?.price)}
                          />
                        ) : (
                          <Amount
                            className="text-xl text-gray-300 line-through"
                            amount={props.price}
                          />
                        )}
                      </div>
                    </div>

                    <Divider className="my-2" />

                    {/* // add to cart button */}
                    <div className=" mb-2">
                      <YellowButton
                        loading={loading}
                        text={
                          <div className="mx-auto flex w-full flex-row content-center items-center justify-center space-x-1">
                            <PlusIcon height={10} width={10} />
                            <ShoppingCartIcon height={12} width={12} />
                            <p>Add to cart </p>
                          </div>
                        }
                        className="w-full flex-1"
                        onClick={add_to_basket}
                      />
                    </div>
                  </div>

                  <div className="my-4 flex flex-col rounded bg-white px-2 py-4 md:px-8">
                    {/* <Divider className='my-2' /> */}
                  </div>
                  {/* <div
                  onClick={() =>
                    history.push(
                      `/store/${props.data.store_info?.store_id}/products`
                    )
                  }
                  className="flex cursor-pointer flex-row items-center space-x-4 rounded border border-gray-200 bg-white p-4"
                >
                  <Avatar
                    src={props.data.store_info?.logo}
                    name={props.data.store_info?.company_name}
                    className="text-gray-700"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-gray-700">
                      View {props.data.store_info?.company_name}'s
                      store
                    </p>
                    <p className="text-sm text-gray-400">
                      View the seller's shop and catalogues
                    </p>
                  </div>
                </div> */}
                </div>
              </div>

              {/* // description compoennt */}
              <section className="mt-4 w-full md:mt-8 ">
                <div className="flex">
                  {show_features ? (
                    <div className="flex flex-row items-center">
                      <span
                        onClick={() => setShowFeatures(false)}
                        className="cursor-pointer p-4 hover:bg-gray-50"
                      >
                        Description
                      </span>
                      <span
                        onClick={() => setShowFeatures(true)}
                        className="cursor-pointer rounded-t border-b-2 border-blue-primary bg-white p-4  font-semibold text-blue-primary hover:bg-gray-50"
                      >
                        Product Features
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-row items-center">
                      <span
                        onClick={() => setShowFeatures(false)}
                        className="cursor-pointer rounded-t border-b-2 border-blue-primary bg-white p-4  font-semibold text-blue-primary hover:bg-gray-50"
                      >
                        Description
                      </span>
                      <span
                        onClick={() => setShowFeatures(true)}
                        className="cursor-pointer p-4 hover:bg-gray-50"
                      >
                        Product Features
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex w-full rounded bg-white py-2 px-4 md:px-16 md:py-4">
                  <h3 className="sr-only">Description</h3>

                  <span className="w-full flex-grow ">
                    <div className="mb-4 flex flex-col">
                      <div
                        className="space-y-6 text-base leading-normal text-gray-700"
                        dangerouslySetInnerHTML={{
                          __html: props.about,
                        }}
                      />
                    </div>
                    {/* <span
                    onClick={() => setShowMore(!showMore)}
                    className="cutsor-pointer mx-auto my-4 w-full self-center rounded bg-[#0e75bc] p-2 text-center text-xs font-semibold text-white"
                  >
                    {showMore ? "Read Less" : "Read More"}
                  </span> */}
                  </span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export default Product;
