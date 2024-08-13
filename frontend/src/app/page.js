import { SectionMenu } from "@/components/sectionMenu";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-4 pt-28">
      {/* Main Section */}
      <section className="w-full flex justify-between mb-4">
        {/* Anúncios na lateral esquerda*/}
        <div className="space-y-6">
          <div className="hidden lg:flex bg-gray-300 h-96 w-40 items-center justify-center rounded-lg font-semibold">
            GOOGLE ADS
          </div>
          <div className="hidden lg:flex bg-gray-300 h-40 w-40 items-center justify-center rounded-lg font-semibold">
            GOOGLE ADS
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="p-4 w-full max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold mb-10 md:text-5xl">Download any video from all Social Media</h1>

          {/* Campo de Input para link */}
          <div className="relative mb-8 w-11/12 md:w-2/3 mx-auto">
            <input type="text" placeholder="Insert your link here" className="w-full p-3 pl-6 pr-12 border-0 rounded-lg drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-main-color ease-in-out transition-all duration-100"></input>
            <div className="absolute right-3 top-0 bottom-0 flex items-center">
              <img src="/paste.svg" alt="Paste your link" className="w-6 h-6"></img>
            </div>
          </div>

          {/* Botão de Download */}
          <button className="bg-main-color text-white py-2 px-10 rounded-full mb-10 shadow shadow-main-color hover:shadow-md hover:shadow-main-color hover:bg-secondary-bg-color hover:font-semibold transition-all ease-in duration-200">
            Download Media
          </button>

          {/* Texto explicativo */}
          <div className="mb-10 text-sm w-full mx-auto text-left font-semibold md:text-center md:w-4/5 md:font-medium">
            <p className="mb-4">All In One Downloader gives you a tool to Download any <strong>video</strong>, <strong>gif</strong> or <strong>image</strong> from most of the social media platforms that exists today. </p>
            <p>Start by inserting the <strong>link of your video above</strong> or click on the right icon to paste directly in the box to start instantly downloading your media!</p>
          </div>

          {/* Botão para explorar mais */}
          <SectionMenu />

          {/* Anúncios no inferior */}
          <div className="flex bg-gray-300 h-32 w-4/5 items-center justify-center rounded-lg font-semibold m-auto">
            GOOGLE ADS
          </div>
        </div>

        {/* Anúncios na lateral direita*/}
        <div className="space-y-6">
          <div className="hidden lg:flex bg-gray-300 h-96 w-40 items-center justify-center rounded-lg font-semibold">
            GOOGLE ADS
          </div>
          <div className="hidden lg:flex bg-gray-300 h-40 w-40 items-center justify-center rounded-lg font-semibold">
            GOOGLE ADS
          </div>
        </div>

      </section>

      {/* Card Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2 lg:p-8 w-full">
          {/* Card 1 */}
          <div className="bg-[#FF3A54] px-8 pt-6 text-white rounded-2xl flex space-between shadow-2xl shaadow-inner cursor-pointer lg:hover:scale-95 active:scale-90 transition-transform group">
            <div className="lg:space-y-1">
              <h2 class="text-xl xl:text-3xl font-extrabold">Instagram</h2>
              <p className="text-sm lg:text-md">A famous social media that is capable to connect you to the world</p>
              <img src="/arrow_right.svg" className="hidden md:block md:w-10 xl:w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></img>
            </div>
            <div className="flex-shrink-0 ml-4">
              <div className="relative">
                <img src="/socialMediaPrints/instagram.jpg" alt="Instagram" className="rounded-t-2xl w-28 lg:w-32"></img>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-[#FF3A54] px-8 pt-6 text-white rounded-2xl flex space-between shadow-2xl shaadow-inner cursor-pointer lg:hover:scale-95 active:scale-90 transition-transform group">
            <div className="lg:space-y-1">
              <h2 class="text-xl xl:text-3xl font-extrabold">Instagram</h2>
              <p className="text-sm lg:text-md">A famous social media that is capable to connect you to the world</p>
              <img src="/arrow_right.svg" className="hidden md:block md:w-10 xl:w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></img>
            </div>
            <div className="flex-shrink-0 ml-4">
              <div className="relative">
                <img src="/socialMediaPrints/instagram.jpg" alt="Instagram" className="rounded-t-2xl w-28 lg:w-32"></img>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-[#FF3A54] px-8 pt-6 text-white rounded-2xl flex space-between shadow-2xl shaadow-inner cursor-pointer lg:hover:scale-95 active:scale-90 transition-transform group">
            <div className="lg:space-y-1">
              <h2 class="text-xl xl:text-3xl font-extrabold">Instagram</h2>
              <p className="text-sm lg:text-md">A famous social media that is capable to connect you to the world</p>
              <img src="/arrow_right.svg" className="hidden md:block md:w-10 xl:w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></img>
            </div>
            <div className="flex-shrink-0 ml-4">
              <div className="relative">
                <img src="/socialMediaPrints/instagram.jpg" alt="Instagram" className="rounded-t-2xl w-28 lg:w-32"></img>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-[#FF3A54] px-8 pt-6 text-white rounded-2xl flex space-between shadow-2xl shaadow-inner cursor-pointer lg:hover:scale-95 active:scale-90 transition-transform group">
            <div className="lg:space-y-1">
              <h2 class="text-xl xl:text-3xl font-extrabold">Instagram</h2>
              <p className="text-sm lg:text-md">A famous social media that is capable to connect you to the world</p>
              <img src="/arrow_right.svg" className="hidden md:block md:w-10 xl:w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></img>
            </div>
            <div className="flex-shrink-0 ml-4">
              <div className="relative">
                <img src="/socialMediaPrints/instagram.jpg" alt="Instagram" className="rounded-t-2xl w-28 lg:w-32"></img>
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-[#FF3A54] px-8 pt-6 text-white rounded-2xl flex space-between shadow-2xl shaadow-inner cursor-pointer lg:hover:scale-95 active:scale-90 transition-transform group">
            <div className="lg:space-y-1">
              <h2 class="text-xl xl:text-3xl font-extrabold">Instagram</h2>
              <p className="text-sm lg:text-md">A famous social media that is capable to connect you to the world</p>
              <img src="/arrow_right.svg" className="hidden md:block md:w-10 xl:w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></img>
            </div>
            <div className="flex-shrink-0 ml-4">
              <div className="relative">
                <img src="/socialMediaPrints/instagram.jpg" alt="Instagram" className="rounded-t-2xl w-28 lg:w-32"></img>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="bg-[#FF3A54] px-8 pt-6 text-white rounded-2xl flex space-between shadow-2xl shaadow-inner cursor-pointer lg:hover:scale-95 active:scale-90 transition-transform group">
            <div className="lg:space-y-1">
              <h2 class="text-xl xl:text-3xl font-extrabold">Instagram</h2>
              <p className="text-sm lg:text-md">A famous social media that is capable to connect you to the world</p>
              <img src="/arrow_right.svg" className="hidden md:block md:w-10 xl:w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></img>
            </div>
            <div className="flex-shrink-0 ml-4">
              <div className="relative">
                <img src="/socialMediaPrints/instagram.jpg" alt="Instagram" className="rounded-t-2xl w-28 lg:w-32"></img>
              </div>
            </div>
          </div>
          {/* Card 7 */}
          <div className="bg-[#FF3A54] px-8 pt-6 text-white rounded-2xl flex space-between shadow-2xl shaadow-inner cursor-pointer lg:hover:scale-95 active:scale-90 transition-transform group">
            <div className="lg:space-y-1">
              <h2 class="text-xl xl:text-3xl font-extrabold">Instagram</h2>
              <p className="text-sm lg:text-md">A famous social media that is capable to connect you to the world</p>
              <img src="/arrow_right.svg" className="hidden md:block md:w-10 xl:w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></img>
            </div>
            <div className="flex-shrink-0 ml-4">
              <div className="relative">
                <img src="/socialMediaPrints/instagram.jpg" alt="Instagram" className="rounded-t-2xl w-28 lg:w-32"></img>
              </div>
            </div>
          </div>
          {/* Card 8 */}
          <div className="bg-[#FF3A54] px-8 pt-6 text-white rounded-2xl flex space-between shadow-2xl shaadow-inner cursor-pointer lg:hover:scale-95 active:scale-90 transition-transform group">
            <div className="lg:space-y-1">
              <h2 class="text-xl xl:text-3xl font-extrabold">Instagram</h2>
              <p className="text-sm lg:text-md">A famous social media that is capable to connect you to the world</p>
              <img src="/arrow_right.svg" className="hidden md:block md:w-10 xl:w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></img>
            </div>
            <div className="flex-shrink-0 ml-4">
              <div className="relative">
                <img src="/socialMediaPrints/instagram.jpg" alt="Instagram" className="rounded-t-2xl w-28 lg:w-32"></img>
              </div>
            </div>
          </div>
          {/* Card 9 */}
          <div className="bg-[#FF3A54] px-8 pt-6 text-white rounded-2xl flex space-between shadow-2xl shaadow-inner cursor-pointer lg:hover:scale-95 active:scale-90 transition-transform group">
            <div className="lg:space-y-1">
              <h2 class="text-xl xl:text-3xl font-extrabold">Instagram</h2>
              <p className="text-sm lg:text-md">A famous social media that is capable to connect you to the world</p>
              <img src="/arrow_right.svg" className="hidden md:block md:w-10 xl:w-14 -ml-2 xl:-ml-3 group-hover:translate-x-2 duration-200"></img>
            </div>
            <div className="flex-shrink-0 ml-4">
              <div className="relative">
                <img src="/socialMediaPrints/instagram.jpg" alt="Instagram" className="rounded-t-2xl w-28 lg:w-32"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
