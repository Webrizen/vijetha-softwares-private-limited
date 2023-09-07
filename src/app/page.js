import HeroIMG from '@/assets/hero.webp';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="body-font min-h-screen flex flex-col items-center justify-center relative antialiased">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
             <span className='chip'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              Craft, Preview & Ship
            </span>
            <h1 className="title-font sm:text-7xl text-5xl mb-4 font-bold animate-fade-right animate-once animate-ease-in-out text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-600">Everything You Can Imagine Is Real.
            </h1>
            <p className="mb-4 leading-relaxed animate-fade-right animate-once animate-ease-in-out">Empowering Innovation Through Cutting-Edge Software Solutions and Transformative Technology Services. Elevate Your Digital Journey with Vijetha Software's Private Limited.</p>
            <div className="flex justify-center animate-fade-down animate-once animate-ease-in-out">
              <button className="inline-flex text-white bg-gradient-to-r from-red-400 to-amber-600 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-r hover:from-amber-600 hover:to-red-400 rounded text-base ">Discover</button>
              <button className="ml-4 inline-flex text-gray-100 hover:bg-[rgba(225,225,225,0.1)] border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base">Get a Demo</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image className="object-cover object-center rounded animate-bounce animate-infinite animate-ease-in-out filter drop-shadow-2xl" alt="hero" src={HeroIMG} />
          </div>
        </div>
      </section>
    </>
  )
}