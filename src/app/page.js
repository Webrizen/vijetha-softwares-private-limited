import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="body-font relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-transparent"></div>

        <div className="container mx-auto flex p-5 min-h-screen items-center justify-center flex-col relative">
          <div className="text-center lg:w-3/4 w-full">
            <h1 className="title-font sm:text-8xl text-3xl mb-4 font-bold bg-clip-text text-transparent gradient-animation">Unlocking Digital Potential.</h1>
            <p className="mb-8 leading-relaxed text-white">Empowering Innovation Through Cutting-Edge Software Solutions and Transformative Technology Services. Elevate Your Digital Journey with Vijetha Software's Private Limited</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-gradient-to-r from-red-400 to-amber-500 background-animate border-0 py-2 px-6 focus:outline-none rounded text-base">Discover</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base">Get a Demo</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}