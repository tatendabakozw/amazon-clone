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

import Carousel from "react-grid-carousel";
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
      
    </div>
  );
};

export default DesktopView;
