import { CarouselDefault } from '@/components/CarouselDefault';

export default function Home() {
  return (
    <>
      <section className="body-font relative min-h-screen flex flex-col gap-2 items-center justify-center py-20">
        <div className="grid-background">
          <div className="grid-container">
            {Array.from({ length: 200 }, (_, index) => (
              <div key={index} className="grid-box"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto flex p-5 items-center justify-center flex-col relative">
          <div className="text-center lg:w-3/4 w-full">
            <span className='chip'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              Craft, Preview & Ship
            </span>
            <h1 className="title-font sm:text-8xl text-3xl mb-4 mt-4 font-bold bg-clip-text text-transparent gradient-animation">Unlocking Digital Potential.</h1>
            <p className="mb-8 leading-relaxed text-white">Empowering Innovation Through Cutting-Edge Software Solutions and Transformative Technology Services. Elevate Your Digital Journey with Vijetha Software's Private Limited</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-gradient-to-r from-red-400 to-amber-500 background-animate border-0 py-2 px-6 focus:outline-none rounded text-base">Discover</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base">Get a Demo</button>
            </div>
          </div>
        </div>

        <CarouselDefault />
      </section>
    </>
  )
}