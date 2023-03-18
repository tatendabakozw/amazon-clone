import React, { useEffect, useState } from "react";
import headsets from "@assets/headsets.jpg";
import chairs from "@assets/chairs.jpg";
import keyboards from "@assets/keyboards.jpg";
import mice from "@assets/mice.jpg";
import personal_care from "@assets/personal_care.jpg";
import computers_and from "@assets/computers_and.jpg";
import video_games from "@assets/video_games.jpg";
import baby_monitor from "@assets/baby_monitor.jpg";
import toys_and_games from "@assets/toys_and_games.jpg";
import we_ship_over from "@assets/we_ship_over.jpg";
// @ts-ignore
import Carousel from 'better-react-carousel'
import beauty_picks from "@assets/beauty_picks.jpg";
import dresses from "@assets/dresses.jpg";
import get_fit from "@assets/get_fit.jpg";
import baby1 from "@assets/baby1.jpg";
import baby2 from "@assets/baby2.jpg";
import baby3 from "@assets/baby3.jpg";
import baby4 from "@assets/baby4.jpg";
import baby5 from "@assets/baby5.jpg";
import baby6 from "@assets/baby6.jpg";
import baby7 from "@assets/baby7.jpg";
import baby8 from "@assets/baby8.jpg";
import baby9 from "@assets/baby9.jpg";
import book1 from "@assets/book1.jpg";
import book2 from "@assets/book2.jpg";
import book3 from "@assets/book3.jpg";
import book4 from "@assets/book4.jpg";
import book5 from "@assets/book5.jpg";
import book6 from "@assets/book6.jpg";
import book7 from "@assets/book7.jpg";
import book8 from "@assets/book8.jpg";
import book9 from "@assets/book9.jpg";
import book0 from "@assets/book0.jpg";
import book11 from "@assets/book11.jpg";
import book12 from "@assets/book12.jpg";
import book13 from "@assets/book13.jpg";
import banner1 from "@assets/banner1.jpg";
import banner2 from "@assets/banner2.jpg";
import banner3 from "@assets/banner3.jpg";
import banner4 from "@assets/banner4.jpg";
import CategoryItem from "@components/category-item/CategoryItem";
import toy_arrivals from "@assets/toy_arrivals.jpg";
import { Link } from "react-router-dom";

const baby_categories = [
  { image: baby1 },
  { image: baby2 },
  { image: baby3 },
  { image: baby4 },
  { image: baby5 },
  { image: baby6 },
  { image: baby7 },
  { image: baby8 },
  { image: baby9 },
];

const books = [
  { image: book1 },
  { image: book2 },
  { image: book3 },
  { image: book4 },
  { image: book5 },
  { image: book6 },
  { image: book7 },
  { image: book8 },
  { image: book9 },
  { image: book0 },
  { image: book11 },
  { image: book12 },
  { image: book13 },
];

type Props = {};

const sliderData = [
  {
    image: banner1,
    heading: "Slide One",
    desc: "first banner image.",
  },
  {
    image: banner2,
    heading: "Slide Two",
    desc: "second banner image.",
  },
  {
    image: banner3,
    heading: "Slide Three",
    desc: " third banner image",
  },
  {
    image: banner4,
    heading: "Slide Four",
    desc: " fourth banner image.",
  },
];

const DesktopView = (props: Props) => {
  // carousel
  const [BackPhoto, setBackPhoto] = useState(sliderData[0].image);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackPhoto(
        sliderData[Math.floor(Math.random() * sliderData.length)].image
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`max-w-7xl mx-auto flex w-full h-full min-h-screen bg-no-repeat p-2 relative pt-20`}
    >
      <img
        src={BackPhoto}
        alt=""
        className="w-full duration-700 ease-in-out absolute z-0 object-cover  top-0 right-0 left-0 bottom-0"
      />
      {/* <div className="overlay  absolute  top-0 right-0 left-0 bottom-0 bg-black z-0 opacity-40"></div> */}
      <div className="grid grid-cols-4 gap-4 z-40">
        {/* gaming accesories */}
        <div className="flex flex-col pt-40 col-span-1">
          <div className=" bg-white p-4">
            <p className="text-slate-900 font-semibold text-lg pb-2">
              Gaming accessories
            </p>
            <Link
              to="/explore/?cat=computers"
              className="grid grid-cols-2 gap-6"
            >
              <div className="col-span-1 flex flex-col">
                <img src={headsets} alt="headsets" />
                <p className="text-xs">Headsets</p>
              </div>
              <div className="col-span-1 flex flex-col">
                <img src={keyboards} alt="headsets" />
                <p className="text-xs">Keyboards</p>
              </div>
              <div className="col-span-1 flex flex-col">
                <img src={mice} alt="headsets" />
                <p className="text-xs">computer mice</p>
              </div>
              <div className="col-span-1 flex flex-col">
                <img src={chairs} alt="headsets" />
                <p className="text-xs">Chairs</p>
              </div>
            </Link>
            <p className="pt-10 text-blue-600 text-sm cursor-pointer">
              See more
            </p>
          </div>
        </div>
        {/* Personal care */}
        <div className="flex flex-col pt-40 col-span-1">
          <Link
            to="/explore/?cat=beauty-and-personal-care"
            className=" bg-white p-4"
          >
            <p className="text-slate-900 font-semibold text-lg pb-2">
              Health & Personal Care
            </p>
            <div className="grid ">
              <div className="flex flex-col">
                <img src={personal_care} alt="headsets" />
                {/* <p className="text-xs">Headsets</p> */}
              </div>
            </div>
            <p className="pt-8 text-blue-600 text-sm cursor-pointer">
              See more
            </p>
          </Link>
        </div>
        {/* Shop by category */}
        <div className="flex flex-col pt-40 col-span-1">
          <div className=" bg-white p-4">
            <p className="text-slate-900 font-semibold text-lg pb-2">
              Shop by Category
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/explore/?cat=computers"
                className="col-span-1 flex flex-col bg-slate-100 items-center"
              >
                <div className="h-20 w-20">
                  <img
                    src={computers_and}
                    alt="headsets"
                    className="h-16 object-contain"
                  />
                </div>
                <p className="text-xs text-center">computer Accessories</p>
              </Link>
              <Link
                to="/explore/?cat=movies-and-tv"
                className="col-span-1 flex flex-col bg-slate-100 items-center"
              >
                <div className="h-20 w-20">
                  <img
                    src={video_games}
                    alt="headsets"
                    className="h-16 object-contain"
                  />
                </div>
                <p className="text-xs text-center">Video games</p>
              </Link>
              <Link
                to="/explore/?cat=baby"
                className="col-span-1 flex flex-col bg-slate-100 items-center"
              >
                <div className="h-20 w-20 grid items-center content-center justify-center">
                  <img
                    src={baby_monitor}
                    alt="headsets"
                    className="h-16 object-contain"
                  />
                </div>
                <p className="text-xs text-center">baby</p>
              </Link>
              <Link
                to="/explore/?cat=movies-and-tv"
                className="col-span-1 flex flex-col bg-slate-100 items-center"
              >
                <div className="h-20 w-20 grid items-center content-center justify-center">
                  <img
                    src={toys_and_games}
                    alt="headsets"
                    className="h-16 object-contain"
                  />
                </div>
                <p className="text-xs text-center">Toys Games</p>
              </Link>
            </div>
            <p className="pt-12 text-blue-600 text-sm cursor-pointer">
              See more
            </p>
          </div>
        </div>
        <div className="flex flex-col pt-40 items-center col-span-1">
          <div className=" bg-white p-4">
            <p className="text-slate-900 font-semibold text-lg pb-2">
              Sign in for the best experience
            </p>
            <Link
              to="/login"
              className="flex flex-col items-center p-2 bg-secondary-original rounded text-center text-sm"
            >
              <p className="text-center">Sign in securely</p>
            </Link>
          </div>
          <img
            src={we_ship_over}
            alt="headsets"
            className="h-64 w-64 object-contain"
          />
        </div>

        {/* beauty pick */}
        <CategoryItem heading="Beauty Picks" picture={beauty_picks} />

        {/* Dresses */}
        <CategoryItem heading="Dresses" picture={dresses} />

        {/* Get fit at home */}
        <CategoryItem heading="Get fit at home" picture={get_fit} />

        {/* Electronics */}
        <CategoryItem heading="Electronics" picture={personal_care} />

        <div className="col-span-4 bg-white p-4">
          <p className="text-slate-900 font-semibold text-lg pb-4">
            Frequently repurchased in Baby Products
          </p>
          <div className="flex flex-row">
            <Carousel cols={6} rows={1} gap={10} loop>
              {baby_categories.map((item, index) => (
                <Carousel.Item key={index}>
                  <img className="h-44" src={item.image} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        {/* <div className="col-span-4 bg-white p-4">
          <p className="text-slate-900 font-semibold text-lg pb-4">
            Top Sellers in Books for you
          </p>
          <div className="flex flex-row">
            <Carousel cols={9} rows={1} gap={2} loop>
              {books.map((item, index) => (
                <Carousel.Item key={index}>
                  <img className="h-44" src={item.image} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div> */}

        {/* beauty pick */}
        <CategoryItem heading="New Arrivals in toys" picture={toy_arrivals} />

        {/* Dresses */}
        <CategoryItem heading="for your fitness needs" picture={dresses} />

        {/* Get fit at home */}
        <CategoryItem heading="shop activity trackers" picture={get_fit} />

        {/* Electronics */}
        <CategoryItem
          heading="Shop laptops & tablets"
          picture={personal_care}
        />
      </div>
    </div>
  );
};

export default DesktopView;
