import * as React from "react";
import airbnbLogoPNG from "./assets/airbnb-logo.png";
import {
  MagnifyingGlassIcon,
  UserIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  AdjustmentsHorizontalIcon,
  StarIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import {
  GlobeAltIcon,
  Bars3Icon,
  HomeModernIcon,
  CurrencyDollarIcon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";

export const HomeFeature = () => {
  return (
    <div className="container mx-auto max-w-full bg-white">
      <div className="flex flex-col items-center justify-start space-y-0">
        <Banner />
        <MainNavigationMenu />
        <SecondaryNavigationMenu />
        <ContentBody />
        <Footer />
      </div>
    </div>
  );
};

export const Footer = () => (
  <div className="defaultContainerPadding fixed inset-x-0 bottom-0 flex w-full flex-col border-t border-slate-200 lg:space-y-4 lg:border-none">
    <div className="hidden flex-row items-center justify-center py-2 lg:flex">
      <button className="flex flex-row items-center justify-center space-x-2 rounded-full bg-slate-950 px-4 py-3 text-center text-xs text-white shadow-slate-500 transition-all duration-300 hover:px-5 hover:py-3.5  hover:shadow-lg">
        <span className="font-medium">Show Map</span>
        <MapIcon className="h-4 w-4" />
      </button>
    </div>

    {/* Mobile */}
    <div className=" flex w-full flex-row justify-center space-x-6 bg-white pt-2 lg:hidden">
      <div className="flex cursor-pointer flex-col items-center justify-center space-y-1 border-b-2 border-white pb-2 text-slate-400 hover:border-slate-500">
        <MagnifyingGlassIcon className="h-6 w-6" />
        <span className="text-xs leading-tight">Explore</span>
      </div>
      <div className="flex cursor-pointer flex-col items-center justify-center space-y-1 border-b-2 border-white pb-2 text-slate-400 hover:border-slate-500">
        <HeartIcon className="h-6 w-6" />
        <span className="text-xs leading-tight">Wishlists</span>
      </div>
      <div className="flex cursor-pointer flex-col items-center justify-center space-y-1 border-b-2 border-white pb-2 text-slate-400 hover:border-slate-500">
        <UserCircleIcon className="h-6 w-6" />
        <span className="text-xs leading-tight">Log in</span>
      </div>
    </div>

    {/* Desktop */}
    <div className="hidden flex-row justify-between bg-white py-2 lg:flex">
      {/* Left */}
      <div className="font-base flex flex-row items-center space-x-4 text-xs text-slate-500">
        <p>© 2023 Airbnb, Inc.</p>
        <a href="#" className="transition-all duration-300 hover:underline">
          Terms
        </a>
        <a href="#" className="transition-all duration-300 hover:underline">
          Sitemap
        </a>
        <a href="#" className="transition-all duration-300 hover:underline">
          Privacy
        </a>
        <a href="#" className="transition-all duration-300 hover:underline">
          Your Privacy Choices
        </a>
        <a href="#" className="transition-all duration-300 hover:underline">
          Destinations
        </a>
      </div>
      {/* Right */}
      <div className="flex flex-row items-center space-x-4 text-xs font-bold text-slate-600">
        <a
          href="#"
          className="flex flex-row items-center space-x-1 transition-all duration-300 hover:underline"
        >
          <GlobeAltIcon className="h-5 w-5 text-slate-500" />
          <span>English (US)</span>
        </a>
        <a
          href="#"
          className="flex flex-row items-center space-x-1 transition-all duration-300 hover:underline"
        >
          <CurrencyDollarIcon className="h-5 w-5 text-slate-500" />
          <span>Dollar</span>
        </a>
        <a
          href="#"
          className="flex flex-row items-center space-x-1 transition-all duration-300 hover:underline"
        >
          <span>Support & Resources</span>
          <ChevronUpIcon className="h-5 w-5 text-slate-500" />
        </a>
      </div>
    </div>
  </div>
);

export const ContentBody = () => (
  <div className="container mx-auto max-w-7xl">
    <div className="defaultContainerPadding max-7x-xl  flex flex-col py-3">
      {/* Grid */}
      <div className="grid grid-cols-12 gap-x-4 gap-y-6">
        {[...(Array(20) as number[])].map((e, i) => (
          <div
            key={`listing-${i}`}
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
          >
            <div className="flex flex-col items-start justify-start space-y-2">
              <img
                className="aspect-square rounded-lg"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-659600087552092324/original/45fe0ffd-7569-4bad-8ccc-620d0a625c65.jpeg?im_w=720"
                alt="property featured photo"
              />
              <div className="flex w-full flex-col items-start justify-start space-y-1 px-1 text-xs">
                {/* Description */}
                <div className="flex w-full flex-row space-x-1">
                  <div className="flex-1">
                    <div className="text-sm font-bold leading-tight lg:text-xs">
                      Wansan-gu, Jeonju, South Korea
                    </div>
                    <div className="flex flex-col space-y-0">
                      <div className="font-base font-light leading-tight text-slate-500">
                        1,318 Miles Away
                      </div>
                      <div className="font-base font-light leading-tight text-slate-500">
                        June 24 - 29
                      </div>
                    </div>
                    <div className="font-base font-bold leading-tight text-slate-500">
                      $210 USD
                      <span className="font-light"> night</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex w-auto flex-col">
                    <div className="flex flex-row items-center space-x-0.5">
                      <StarIcon className="h-3 w-3" />
                      <span className="text-xs font-light">4.96</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const SecondaryNavigationMenu = () => (
  <div className="container mx-auto max-w-7xl">
    <div className="defaultContainerPadding sticky top-16 z-10 flex h-20 w-full items-end justify-between border-b bg-white lg:h-24 ">
      <div className="flex w-full flex-row items-center space-x-2">
        <div className="relative flex-1 overflow-hidden">
          <div className="absolute left-0 flex h-full w-auto flex-col items-center bg-white/80 pl-2 pr-4 backdrop-blur-[1px]">
            <button className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 bg-white">
              <ChevronLeftIcon className="h-5 w-5 text-slate-800" />
            </button>
          </div>
          <div className="absolute right-0 flex h-full w-auto flex-col items-center bg-white/80 pl-4 pr-2 backdrop-blur-[1px]">
            {/* INTERESTING */}
            <button className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 bg-white">
              <ChevronRightIcon className="h-5 w-5 text-slate-800" />
            </button>
          </div>
          {/* INTERESTING */}
          <div className="hideScrollbar flex w-full flex-row items-center justify-start space-x-6 overflow-x-scroll">
            {[...(Array(20) as number[])].map((e, i) => (
              <div
                key={i}
                className="flex cursor-pointer flex-col items-center justify-center space-y-2 border-b-2 border-white pb-2 text-slate-600 hover:border-slate-500"
              >
                <HomeModernIcon className="h-6 w-6" />
                <span className="text-xs leading-tight">Camping</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4 hidden h-full w-auto items-center justify-center pl-2 lg:flex">
          <button
            type="button"
            className="flex flex-row items-center space-x-2 rounded-lg border border-slate-300 px-3 py-2 shadow-slate-100 hover:shadow-md"
          >
            <AdjustmentsHorizontalIcon className="h-3 w-3 text-slate-800" />

            <div className="text-xs font-medium">Filter</div>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export const MainNavigationMenu = () => (
  <div className="defaultContainerPadding sticky top-0 z-20 flex h-20 w-full items-center justify-between border bg-white">
    {/* Left */}
    <div className="flex flex-row items-center space-x-1">
      <div className="relative h-8 w-8">
        <Image src={airbnbLogoPNG} alt="airbnb Logo" fill />
      </div>
      <span className="text-2xl font-bold tracking-tight text-rose-500">
        airbnb
      </span>
    </div>
    {/* Center */}

    <div className="hidden cursor-pointer flex-row items-center rounded-full border border-slate-300 px-2 py-1 shadow-sm shadow-slate-200 transition-shadow duration-200 hover:shadow-md lg:flex">
      <div className="divider-slate-400 flex flex-row divide-x p-2 text-sm text-slate-900">
        <div className="pl-2 pr-4 font-bold">Anywhere</div>
        <div className="px-4 font-semibold">Any Week</div>
        <div className="px-4 text-slate-400">Add guests</div>
      </div>
      <button
        className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-white"
        type="button"
      >
        <MagnifyingGlassIcon className="h-4 w-4 text-white" />
      </button>
    </div>

    {/* Right */}
    <div className="hidden flex-row items-center space-x-1 lg:flex">
      <div className="cursor-pointer rounded-full px-4 py-2 text-sm text-slate-800 hover:bg-stone-100">
        <a className="font-medium tracking-tight" href="#">
          Airbnb your home
        </a>
      </div>
      <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full hover:bg-stone-100">
        <GlobeAltIcon className="h-5 w-5 text-slate-500" />
      </div>
      <div className="cursor-pointer rounded-full border border-slate-200 px-3 py-1 shadow-slate-200 transition-shadow duration-200 hover:shadow-md">
        <div className="flex flex-row items-center justify-center space-x-2">
          <Bars3Icon className="h-5 w-5 text-slate-700" />
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-400">
            <UserIcon className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Banner = () => (
  <div className="defaultContainerPadding hidden h-16 w-full items-center justify-between border-b border-slate-200 bg-stone-100 text-sm text-slate-600 lg:flex">
    <div className="flex flex-row font-sans text-slate-900">
      <span className="text-lg font-semibold tracking-tight">
        Introducing Airbnb Rooms and 50+ features
      </span>
    </div>
    <div className="divider-slate-300 flex flex-row items-center space-x-2 divide-x">
      <div className="flex flex-row items-center space-x-3">
        <img
          src="https://a0.muscache.com/im/pictures/420c6e43-7896-4617-9ff4-ad05eb1f03f8.jpg?im_q=highq&im_w=240"
          alt=""
          className="h-7 rounded-md"
        />
        <div className="px-2">Watch the Rooms film</div>
      </div>
      <div className="pl-4">Learn More</div>
    </div>
  </div>
);

// <div className="flex flex-col">
//   <div className="h-[200px] flex-col bg-green-500">
//     <div className="container mx-auto max-w-screen-2xl">
//       <div className="flex flex-col items-center justify-center text-center">
//         header
//       </div>
//     </div>
//   </div>

//   <div className="flex h-[calc(100vh-250px)] flex-col overflow-scroll bg-white p-2">
//     <div className="container mx-auto max-w-screen-2xl p-4">
//       <div className="grid grid-cols-12 gap-3">
//         {[...(Array(100) as number[])].map((e, i) => (
//           <div
//             key={i}
//             className="col-span-12 flex h-64 flex-col border border-slate-200 p-2 md:col-span-6 lg:col-span-4 xl:col-span-3"
//           >
//             some elements
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>

//   <div className="flex h-16  h-[50px] flex-col bg-red-500">
//     <div className="container mx-auto max-w-screen-2xl">
//       <div className="flex flex-col items-center justify-center text-center">
//         footer
//       </div>
//     </div>
//   </div>
// </div>
