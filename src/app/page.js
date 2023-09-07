import HeroIMG from '@/assets/hero.webp';
import PortfolioIMG from '@/assets/portfolio.webp';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="body-font min-h-screen flex flex-col items-center justify-center relative antialiased">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center border-l-2 rounded-l-xl border-b-2 border-[rgba(225,225,225,0.5)] animate-fade-down animate-once animate-ease-in-out">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <span className='chip'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              Craft, Preview & Ship
            </span>
            <h1 className="title-font sm:text-8xl text-5xl mb-4 font-bold background-animate-text animate-fade-right animate-once animate-ease-in-out">Unlocking Digital Potential.
            </h1>
            <p className="mb-4 leading-relaxed animate-fade-right animate-once animate-ease-in-out text-gray-200">Empowering Innovation Through Cutting-Edge Software Solutions and Transformative Technology Services. Elevate Your Digital Journey with Vijetha Software's Private Limited.</p>
            <div className="flex justify-center animate-fade-down animate-once animate-ease-in-out">
              <button className="inline-flex text-white bg-gradient-to-r from-red-400 to-amber-600 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-r hover:from-amber-600 hover:to-red-400 rounded text-base ">Discover</button>
              <button className="ml-4 inline-flex text-gray-100 hover:bg-[rgba(225,225,225,0.1)] border-0 py-2 px-6 focus:outline-none rounded text-base">Get a Demo</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image className="object-cover object-center rounded animate-bounce animate-infinite animate-ease-in-out filter drop-shadow-2xl" alt="hero" src={HeroIMG} />
          </div>
        </div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center border-r-2 rounded-br-xl border-b-2 border-[rgba(225,225,225,0.5)] animate-fade-down animate-once animate-ease-in-out">
          <div className="flex flex-col gap-3 w-full justify-center items-center text-center">
            <span className='chip'>Connections to Brands.</span>
            <h2 className='sm:text-7xl text-5xl font-semibold'>Trusted by the world’s most innovative teams</h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center border-l-2 rounded-bl-xl border-b-2 border-[rgba(225,225,225,0.5)] animate-fade-down animate-once animate-ease-in-out">
          <div className="container mx-auto flex p-5 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image className="object-cover object-center rounded animate-bounce animate-infinite animate-ease-in-out" alt="hero" src={PortfolioIMG} />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-7xl text-5xl mb-4 font-semibold">Nothing! Just Some Crazy Projects.</h1>
              <p className="mb-8 leading-relaxed text-gray-200">Discover innovation and transformation through our diverse range of projects. From AI-powered social networking to simplified travel, futuristic stock prediction, and elevating online learning, we're committed to creating impactful solutions for a brighter future.</p>
              <div className="flex w-full md:justify-start justify-center items-end">
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                  <label for="hero-field" className="leading-7 text-sm text-gray-600">We Can Help You*</label>
                  <input type="text" id="hero-field" name="hero-field" className="w-full bg-[rgba(225,225,225,0.1)] bg-opacity-50 rounded border border-gray-700 focus:ring-0 focus:ring-none focus:bg-transparent focus:border-gray-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button className="inline-flex text-white bg-gradient-to-r from-red-400 to-amber-600 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-r hover:from-amber-600 hover:to-red-400 rounded text-base ">Connect</button>
              </div>
              <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Just Enter Your Email & We Will Reach You.</p>
              <div className="flex lg:flex-row md:flex-col">
                <button className="bg-[rgba(225,225,225,0.1)] inline-flex py-3 px-5 rounded-lg items-center hover:bg-[rgba(225,225,225,0.2)] focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                  </svg>
                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-400 mb-1">GET IT ON</span>
                    <span className="title-font font-medium">Google Play</span>
                  </span>
                </button>
                <button className="bg-[rgba(225,225,225,0.1)] inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-[rgba(225,225,225,0.2)] focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                  </svg>
                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-400 mb-1">Download on the</span>
                    <span className="title-font font-medium">App Store</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}