import MenuItem from './menuItem'

export function MenuContent() {
  return (
    <>

          <div className="mx-auto w-full select-none">
            <ul className="p-8 md:pl-0 md:pr-4 space-y-4">
              
              <MenuItem href="/instagram" iconSrc="/socialMediaIcons/instagram.svg" text="Instagram" />

              <MenuItem href="/tiktok" iconSrc="/socialMediaIcons/tiktok.svg" text="Tiktok" />

              <MenuItem href="/facebook" iconSrc="/socialMediaIcons/facebook.svg" text="Facebook" />

              <MenuItem href="/youtube" iconSrc="/socialMediaIcons/youtube.svg" text="Youtube" />

              <MenuItem href="/twitter" iconSrc="/socialMediaIcons/twitter.svg" text="Twitter" />

              <MenuItem href="/reddit" iconSrc="/socialMediaIcons/reddit.svg" text="Reddit" />

              <MenuItem href="/snapchat" iconSrc="/socialMediaIcons/snapchat.svg" text="Snapchat" />

              <MenuItem href="/pinterest" iconSrc="/socialMediaIcons/pinterest.svg" text="Pinterest" />

              <MenuItem href="/linkedin" iconSrc="/socialMediaIcons/linkedin.svg" text="LinkedIn" />

              <MenuItem href="/spotify" iconSrc="/socialMediaIcons/spotify.svg" text="Spotify" />

              <MenuItem href="/soundcloud" iconSrc="/socialMediaIcons/soundcloud.svg" text="SoundCloud" />

              <MenuItem href="/threads" iconSrc="/socialMediaIcons/threads.svg" text="Threads" />

            </ul>
          </div>

    </>
  )
}
