"use client";

import * as React from "react";

export function MenuContent() {
  return (
    <div className="mx-auto w-full max-w-sm">
      <ul className="p-8 md:pl-0 md:pr-4 space-y-4">
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-95 active:bg-slate-50 transition cursor-pointer">
          <img className="w-8 h-8 mr-2" src="/socialMediaIcons/instagram.svg"></img>
          Instagram
          <img className="w-7 h-7 absolute right-4" src="/arrow-up-right.svg"></img>
        </li>
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-95 active:bg-slate-50 transition cursor-pointer">
          <img className="w-8 h-8 mr-2" src="/socialMediaIcons/facebook.svg"></img>
          Facebook
          <img className="w-7 h-7 absolute right-4" src="/arrow-up-right.svg"></img>
        </li>
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-95 active:bg-slate-50 transition cursor-pointer">
          <img className="w-8 h-8 mr-2" src="/socialMediaIcons/tiktok.svg"></img>
          Tiktok
          <img className="w-7 h-7 absolute right-4" src="/arrow-up-right.svg"></img>
        </li>
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-95 active:bg-slate-50 transition cursor-pointer">
          <img className="w-8 h-8 mr-2" src="/socialMediaIcons/youtube.svg"></img>
          Youtube
          <img className="w-7 h-7 absolute right-4" src="/arrow-up-right.svg"></img>
        </li>
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-95 active:bg-slate-50 transition cursor-pointer">
          <img className="w-8 h-8 mr-2" src="/socialMediaIcons/twitter.svg"></img>
          Twitter
          <img className="w-7 h-7 absolute right-4" src="/arrow-up-right.svg"></img>
        </li>
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-95 active:bg-slate-50 transition cursor-pointer">
          <img className="w-8 h-8 mr-2" src="/socialMediaIcons/pinterest.svg"></img>
          Pinterest
          <img className="w-7 h-7 absolute right-4" src="/arrow-up-right.svg"></img>
        </li>
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-95 active:bg-slate-50 transition cursor-pointer">
          <img className="w-8 h-8 mr-2" src="/socialMediaIcons/reddit.svg"></img>
          Reddit
          <img className="w-7 h-7 absolute right-4" src="/arrow-up-right.svg"></img>
        </li>
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-95 active:bg-slate-50 transition cursor-pointer">
          <img className="w-8 h-8 mr-2" src="/socialMediaIcons/snapchat.svg"></img>
          Snapchat
          <img className="w-7 h-7 absolute right-4" src="/arrow-up-right.svg"></img>
        </li>
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-95 active:bg-slate-50 transition cursor-pointer">
          <img className="w-8 h-8 mr-2" src="/socialMediaIcons/vimeo.svg"></img>
          Vimeo
          <img className="w-7 h-7 absolute right-4" src="/arrow-up-right.svg"></img>
        </li>
      </ul>
    </div>
    
  )
}



