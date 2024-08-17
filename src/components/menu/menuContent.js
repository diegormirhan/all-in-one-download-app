import Image from 'next/image'

export function MenuContent() {
  return (
    <div className="mx-auto w-full">
      <ul className="p-8 md:pl-0 md:pr-4 space-y-4">
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
          <Image className="mr-2" width={32} height={32} src="/socialMediaIcons/instagram.svg"></Image>
          Instagram
          <Image className="absolute right-4" width={28} height={28} src="/arrow-up-right.svg"></Image>
        </li>
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
          <Image className="mr-2"width={32} height={32} src="/socialMediaIcons/facebook.svg"></Image>
          Facebook
          <Image className="absolute right-4" width={28} height={28} src="/arrow-up-right.svg"></Image>
        </li>
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
          <Image className="mr-2" width={32} height={32} src="/socialMediaIcons/tiktok.svg"></Image>
          Tiktok
          <Image className="absolute right-4" width={28} height={28} src="/arrow-up-right.svg"></Image>
        </li>
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
          <Image className="mr-2" width={32} height={32} src="/socialMediaIcons/youtube.svg"></Image>
          Youtube
          <Image className="absolute right-4" width={28} height={28} src="/arrow-up-right.svg"></Image>
        </li>
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
          <Image className="mr-2" width={32} height={32} src="/socialMediaIcons/twitter.svg"></Image>
          Twitter
          <Image className="absolute right-4" width={28} height={28} src="/arrow-up-right.svg"></Image>
        </li>
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
          <Image className="mr-2" width={32} height={32} src="/socialMediaIcons/pinterest.svg"></Image>
          Pinterest
          <Image className="absolute right-4" width={28} height={28} src="/arrow-up-right.svg"></Image>
        </li>
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
          <Image className="mr-2" width={32} height={32} src="/socialMediaIcons/reddit.svg"></Image>
          Reddit
          <Image className="absolute right-4" width={28} height={28} src="/arrow-up-right.svg"></Image>
        </li>
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
          <Image className="mr-2" width={32} height={32} src="/socialMediaIcons/snapchat.svg"></Image>
          Snapchat
          <Image className="absolute right-4" width={28} height={28} src="/arrow-up-right.svg"></Image>
        </li>
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
          <Image className="mr-2" width={32} height={32} src="/socialMediaIcons/vimeo.svg"></Image>
          Vimeo
          <Image className="absolute right-4" width={28} height={28} src="/arrow-up-right.svg"></Image>
        </li>
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
          <Image className="mr-2" width={32} height={32} src="/socialMediaIcons/spotify.svg"></Image>
          Spotify
          <Image className="absolute right-4" width={28} height={28} src="/arrow-up-right.svg"></Image>
        </li>
        <li className="py-3 px-4 rounded-lg bg-white flex items-center font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
          <Image className="mr-2" width={32} height={32} src="/socialMediaIcons/soundcloud.svg"></Image>
          SoundCloud
          <Image className="absolute right-4" width={28} height={28} src="/arrow-up-right.svg"></Image>
        </li>
      </ul>
    </div>
  )
}



