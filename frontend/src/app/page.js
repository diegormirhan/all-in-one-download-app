export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8">
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
          <div className="relative mb-8 w-2/3 mx-auto">
            <input type="text" placeholder="Insert your link here" className="w-full p-3 pl-6 pr-12 border-0 rounded-lg drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-main-color"></input>
            <div className="absolute right-3 top-0 bottom-0 flex items-center">
              <img src="/paste.svg" alt="Paste your link" className="w-6 h-6"></img>
            </div>
          </div>

          {/* Botão de Download */}
          <button className="bg-main-color text-white py-2 px-10 rounded-full mb-4 shadow shadow-main-color hover:shadow-md hover:shadow-main-color hover:bg-secondary-bg-color hover:font-semibold transition-all duration-200">
            Download Media
          </button>
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
    </main>
  );
}
