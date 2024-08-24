import Image from 'next/image'
import Link from 'next/link'

export function MenuContent() {
  return (
    <div className="mx-auto w-full">
      <ul className="p-8 md:pl-0 md:pr-4 space-y-4">

          <li className="py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='instagram icon svg' width={32} height={32} src="/socialMediaIcons/instagram.svg"></Image>
              Instagram
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='tiktok icon svg' width={32} height={32} src="/socialMediaIcons/tiktok.svg"></Image>
              Tiktok
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='facebook icon svg' width={32} height={32} src="/socialMediaIcons/facebook.svg"></Image>
              Facebook
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='youtube icon svg' width={32} height={32} src="/socialMediaIcons/youtube.svg"></Image>
              Youtube
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='twitter icon svg' width={32} height={32} src="/socialMediaIcons/twitter.svg"></Image>
              Twitter
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='reddit icon svg' width={32} height={32} src="/socialMediaIcons/reddit.svg"></Image>
              Reddit
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='snapchat icon svg' width={32} height={32} src="/socialMediaIcons/snapchat.svg"></Image>
              Snapchat
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='pinterest icon svg' width={32} height={32} src="/socialMediaIcons/pinterest.svg"></Image>
              Pinterest
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='linkedin icon svg' width={32} height={32} src="/socialMediaIcons/linkedin.svg"></Image>
              LinkedIn
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='spotify icon svg' width={32} height={32} src="/socialMediaIcons/spotify.svg"></Image>
              Spotify
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='soundcloud icon svg' width={32} height={32} src="/socialMediaIcons/soundcloud.svg"></Image>
              SoundCloud
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='threads icon svg' width={32} height={32} src="/socialMediaIcons/threads.svg"></Image>
              Threads
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="hidden py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='tumblr icon svg' width={32} height={32} src="/socialMediaIcons/tumblr.svg"></Image>
              Tumblr
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="hidden py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='bilibili icon svg' width={32} height={32} src="/socialMediaIcons/bilibili.svg"></Image>
              Bilibili
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="hidden py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='capcut icon svg' width={32} height={32} src="/socialMediaIcons/capcut.svg"></Image>
              Capcut
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="hidden py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='dailymotion icon svg' width={32} height={32} src="/socialMediaIcons/dailymotion.svg"></Image>
              Dailymotion
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="hidden py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='douyin icon svg' width={32} height={32} src="/socialMediaIcons/tiktok.svg"></Image>
              Douyin
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="hidden py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='weibo icon svg' width={32} height={32} src="/socialMediaIcons/weibo.svg"></Image>
              Weibo
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="hidden py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='xiaohongshu icon svg' width={32} height={32} src="/socialMediaIcons/xiaohongshu.svg"></Image>
              Xiaohongshu
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="hidden py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='rumble icon svg' width={32} height={32} src="/socialMediaIcons/rumble.svg"></Image>
              Rumble
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="hidden py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='9gag icon svg' width={32} height={32} src="/socialMediaIcons/9gag.svg"></Image>
              9GAG
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="hidden py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='likee icon svg' width={32} height={32} src="/socialMediaIcons/likee.svg"></Image>
              Likee
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="hidden py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='ifunny icon svg' width={32} height={32} src="/socialMediaIcons/ifunny.svg"></Image>
              Ifunny
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="hidden py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='vimeo icon svg' width={32} height={32} src="/socialMediaIcons/vimeo.svg"></Image>
              Vimeo
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="hidden py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='hipi icon svg' width={32} height={32} src="/socialMediaIcons/hipi.svg"></Image>
              Hipi
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>

          <li className="hidden py-3 px-4 rounded-lg bg-white font-semibold shadow-xl relative active:scale-90 active:bg-slate-50 transition cursor-pointer">
            <Link href="/" className="flex items-center w-full">
              <Image className="mr-2" alt='ted icon svg' width={32} height={32} src="/socialMediaIcons/ted.svg"></Image>
              Ted
              <Image className="absolute right-4" alt='arrow up right icon' width={28} height={28} src="/icons/arrow-up-right.svg"></Image>
            </Link>
          </li>
      </ul>
    </div>
  )
}
