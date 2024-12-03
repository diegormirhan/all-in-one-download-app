import MenuItem from './menuItem'

export function MenuContent() {
  return (
    <>

          <div className="mx-auto w-full select-none">
            <ul className="px-8 pb-5 md:pl-0 md:pr-4 space-y-4">

              <MenuItem href="/" iconSrc="/icons/logo/svg/logo-blue.svg" text="Home" />
              
              <MenuItem href="/instagram" iconSrc="/socialMediaIcons/instagram.svg" text="Instagram" />

              <MenuItem href="/tiktok" iconSrc="/socialMediaIcons/tiktok.svg" text="Tiktok" />

              <MenuItem href="/facebook" iconSrc="/socialMediaIcons/facebook.svg" text="Facebook" />

              <MenuItem href="/youtube" iconSrc="/socialMediaIcons/youtube.svg" text="Youtube" />

              <MenuItem href="/twitter" iconSrc="/socialMediaIcons/twitter-x.svg" text="X (Twitter)" />

              <MenuItem href="/reddit" iconSrc="/socialMediaIcons/reddit.svg" text="Reddit" />

              <MenuItem href="/snapchat" iconSrc="/socialMediaIcons/snapchat.svg" text="Snapchat" />

              <MenuItem href="/pinterest" iconSrc="/socialMediaIcons/pinterest.svg" text="Pinterest" />

              <MenuItem href="/linkedin" iconSrc="/socialMediaIcons/linkedin.svg" text="LinkedIn" />

              <MenuItem href="/soundcloud" iconSrc="/socialMediaIcons/soundcloud.svg" text="SoundCloud" />

              <MenuItem href="/threads" iconSrc="/socialMediaIcons/threads.svg" text="Threads" />

              {/* <MenuItem href="/xiaohongshu" iconSrc="/socialMediaIcons/xiaohongshu.svg" text="Xiaohongshu" /> */}

              <MenuItem href="/douyin" iconSrc="/socialMediaIcons/tiktok.svg" text="Douyin" />

              <MenuItem href="/rumble" iconSrc="/socialMediaIcons/rumble.svg" text="Rumble" />

              <MenuItem href="/dailymotion" iconSrc="/socialMediaIcons/dailymotion.svg" text="DailyMotion" />

              {/* <MenuItem href="/capcut" iconSrc="/socialMediaIcons/capcut.svg" text="Capcut" /> */}

              <MenuItem href="/tumblr" iconSrc="/socialMediaIcons/tumblr.svg" text="Tumblr" />

              <MenuItem href="/weibo" iconSrc="/socialMediaIcons/weibo.svg" text="Weibo" />

              {/* <MenuItem href="/ifunny" iconSrc="/socialMediaIcons/ifunny.svg" text="Ifunny" />

              <MenuItem href="/likee" iconSrc="/socialMediaIcons/likee.svg" text="Likee" />

              <MenuItem href="/hipi" iconSrc="/socialMediaIcons/hipi.svg" text="Hipi" />

              <MenuItem href="/ted" iconSrc="/socialMediaIcons/ted.svg" text="Ted" />

              <MenuItem href="/9gag" iconSrc="/socialMediaIcons/9gag.svg" text="9Gag" /> */}

              {/* <MenuItem href="/bilibili" iconSrc="/socialMediaIcons/bilibili.svg" text="BiliBili" /> */}

            </ul>
          </div>

    </>
  )
}
