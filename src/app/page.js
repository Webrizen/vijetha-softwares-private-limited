import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="body-font relative min-h-screen flex flex-col gap-3 justify-center items-center py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-transparent"></div>
        <div className="grid-background">
          <div className="grid-container">
            {Array.from({ length: 30 }, (_, index) => (
              <div key={index} className="grid-box animate-fade-down animate-once  animate-ease-in-out"></div>
            ))}
          </div>
        </div>
        <div className="container mx-auto flex p-5 items-center justify-center flex-col relative">
          <div className="text-center lg:w-3/4 w-full">
            <span className='chip animate-shake animate-once animate-ease-in-out'>Beyond Imagination</span>
            <h1 className="title-font sm:text-8xl text-6xl my-4 font-bold bg-clip-text text-transparent gradient-animation animate-fade-down animate-once animate-ease-in-out">Unlocking Digital Potential.</h1>
            <p className="mb-8 leading-relaxed text-white animate-fade-down animate-once animate-ease-in-out">Empowering Innovation Through Cutting-Edge Software Solutions and Transformative Technology Services. Elevate Your Digital Journey with Vijetha Software's Private Limited</p>
            <div className="flex justify-center animate-fade-down animate-once animate-ease-in-out">
              <button className="inline-flex text-white bg-gradient-to-r from-red-400 to-amber-500 background-animate border-0 py-2 px-6 focus:outline-none rounded text-base">Discover</button>
              <button className="ml-4 inline-flex text-gray-500 bg-[rgba(225,225,225,0.1)] border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base">Get a Demo</button>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-500">
              Trusted by the world’s most innovative teams
            </h2>
            <div className="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:filter hover:invert cursor-pointer"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:filter hover:invert cursor-pointer"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:filter hover:invert cursor-pointer"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 hover:filter hover:invert cursor-pointer"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 hover:filter hover:invert cursor-pointer"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>

          </div>
        </div>
      </section>
      <section className="body-font min-h-screen">
        <div className="container px-4 py-4 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="w-full mb-6 lg:mb-0 flex flex-col gap-2 justify-center items-center text-center">
              <span className='chip animate-shake animate-once animate-ease-in-out'>Our Services</span>
              <h1 className="sm:text-7xl text-6xl font-medium title-font my-1 animate-fade-down animate-once animate-ease-in-out h1">What We Can Do For You?</h1>
              <p className="w-full leading-relaxed text-gray-200 px-10 animate-fade-down animate-once animate-ease-in-out">We strive to provide honest services and earn the trust of our clients. Our transparent service policy encourages clients to entrust us with the responsibility of establishing their online identity.</p>
              <div className="h-1 w-20 bg-amber-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:p-0 p-2 -m-4 gap-6 justify-center items-center animate-fade-down animate-once animate-ease-in-out">
            <div className="xl:w-1/4 md:w-1/2 p-3 bg-[rgba(225,225,225,0.1)] backdrop-blur-2xl rounded-lg cardHover">
              <div className=" p-0 rounded-lg">
                <Image className="h-full rounded -z-10 w-full object-cover object-center" src="/web-dev.svg" alt="content" width={600} height={400} />
              </div>
              <div className='info-card z-10 mt-4'>
                <h3 className="tracking-widest text-amber-500 text-xs font-medium title-font">Web Development</h3>
                <h2 className="text-lg text-gray-100 font-medium title-font mb-0">Building Digital Experiences</h2>
                <p className="leading-relaxed text-base text-[rgba(225,225,225,0.5)]">Craft interactive websites and web applications tailored to your needs. From user-friendly interfaces to dynamic functionalities, our web development services bring your online vision to life.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-3 bg-[rgba(225,225,225,0.1)] backdrop-blur-2xl rounded-lg cardHover">
              <div className=" p-0 rounded-lg">
                <Image className="h-full rounded -z-10 w-full object-cover object-center" src="/app-dev.svg" alt="content" width={600} height={400} />
              </div>
              <div className='info-card z-10 mt-4'>
                <h3 className="tracking-widest text-amber-500 text-xs font-medium title-font">App Development</h3>
                <h2 className="text-lg text-gray-100 font-medium title-font mb-0">Powering Your Mobile Presence</h2>
                <p className="leading-relaxed text-base text-[rgba(225,225,225,0.5)]">Create powerful, feature-rich mobile apps for iOS and Android platforms. Our app development expertise ensures your ideas are transformed into engaging and functional mobile experiences.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-3 bg-[rgba(225,225,225,0.1)] backdrop-blur-2xl rounded-lg cardHover">
              <div className=" p-0 rounded-lg">
                <Image className="h-full rounded -z-10 w-full object-cover object-center" src="/pro-dev.svg" alt="content" width={600} height={400} />
              </div>
              <div className='info-card z-10 mt-4'>
                <h3 className="tracking-widest text-amber-500 text-xs font-medium title-font">Prototype Development</h3>
                <h2 className="text-lg text-gray-100 font-medium title-font mb-0"> From Idea to Innovation</h2>
                <p className="leading-relaxed text-base text-[rgba(225,225,225,0.5)]">Rapidly transform your concepts into tangible prototypes. Our prototype development services help you visualize and refine your ideas, accelerating the path to innovative solutions.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-3 bg-[rgba(225,225,225,0.1)] backdrop-blur-2xl rounded-lg cardHover">
              <div className=" p-0 rounded-lg">
                <Image className="h-full rounded -z-10 w-full object-cover object-center" src="/ai-dev.svg" alt="content" width={600} height={400} />
              </div>
              <div className='info-card z-10 mt-4'>
                <h3 className="tracking-widest text-amber-500 text-xs font-medium title-font">AI & ML (Artificial Intelligence & Machine Learning)</h3>
                <h2 className="text-lg text-gray-100 font-medium title-font mb-0"> Pioneering Intelligent Solutions</h2>
                <p className="leading-relaxed text-base text-[rgba(225,225,225,0.5)]">Harness the power of AI and ML to gain insights, automate tasks, and make data-driven decisions. Our expertise in these cutting-edge technologies empowers your business.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-3 bg-[rgba(225,225,225,0.1)] backdrop-blur-2xl rounded-lg cardHover">
              <div className=" p-0 rounded-lg">
                <Image className="h-full rounded -z-10 w-full object-cover object-center" src="/edu-dev.svg" alt="content" width={600} height={400} />
              </div>
              <div className='info-card z-10 mt-4'>
                <h3 className="tracking-widest text-amber-500 text-xs font-medium title-font">Education and Training (for Software Enthusiasts)</h3>
                <h2 className="text-lg text-gray-100 font-medium title-font mb-0">Empowering Future Innovators</h2>
                <p className="leading-relaxed text-base text-[rgba(225,225,225,0.5)]"> Invest in your skills and career growth with our comprehensive education and training programs. From software enthusiasts to professionals, we provide a path to excellence.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-3 bg-[rgba(225,225,225,0.1)] backdrop-blur-2xl rounded-lg cardHover">
              <div className=" p-0 rounded-lg">
                <Image className="h-full rounded -z-10 w-full object-cover object-center" src="/support-dev.svg" alt="content" width={600} height={400} />
              </div>
              <div className='info-card z-10 mt-4'>
                <h3 className="tracking-widest text-amber-500 text-xs font-medium title-font">Customer Care Management Cell</h3>
                <h2 className="text-lg text-gray-100 font-medium title-font mb-0"> Putting Customers First</h2>
                <p className="leading-relaxed text-base text-[rgba(225,225,225,0.5)]">Our dedicated customer care management cell ensures that your queries and concerns are addressed promptly. We prioritize your satisfaction and support your success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="body-font min-h-screen my-12">
        <div className="container px-4 py-4 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="w-full mb-6 lg:mb-0 flex flex-col gap-2 justify-center items-center text-center">
              <span className='chip animate-shake animate-once animate-ease-in-out'>Our Projects</span>
              <h1 className="sm:text-7xl text-6xl font-medium title-font my-1 animate-fade-down animate-once animate-ease-in-out h1">Explore Our Innovative Projects</h1>
              <p className="w-full leading-relaxed text-gray-200 px-10 animate-fade-down animate-once animate-ease-in-out">At Vijetha Softwares, we're passionate about pushing the boundaries of technology to create solutions that make a difference in your life. Our projects are born from a relentless pursuit of innovation and excellence, and we're excited to share them with you. We're at the forefront of technological innovation, bringing you cutting-edge solutions to enhance your life. Discover our exciting projects below.</p>
              <div className="h-1 w-20 bg-amber-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:p-0 py-4 px-4 gap-0 justify-center items-center animate-fade-down animate-once animate-ease-in-out bg-[rgba(225,225,225,0.1)] hover:bg-[rgba(225,225,225,0.2)] cursor-pointer rounded-3xl overflow-hidden">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0 rounded-3xl">
              <img className="object-cover object-center rounded-2xl" alt="hero" src="https://dummyimage.com/720x600" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300">AI-Powered Social Networking
              </h1>
              <p className="mb-8 leading-relaxed">Cutting-edge AI-powered cyber security cell to preserve your privacy with our upcoming social networking App. Experience a new level of connectivity while keeping your data safe.</p>
              <div className="flex justify-center">
                <button className="btn">Learn more</button>
                <button className="link-btn">View Live</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row md:flex-row flex-wrap sm:p-0 py-4 px-4 sm:gap-0 md:gap-0 justify-center items-center animate-fade-down animate-once animate-ease-in-out bg-[rgba(225,225,225,0.1)] hover:bg-[rgba(225,225,225,0.2)] cursor-pointer rounded-3xl overflow-hidden mt-6">
            <div className="lg:flex-grow md:w-1/2 lg:p-8 md:p-8 flex flex-col md:items-start md:text-left mb-2 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300">Travel & Tourism Made Easy with MyRide
              </h1>
              <p className="mb-8 leading-relaxed">Introducing "MyRide," our innovative app that simplifies travel and tourism. Plan your trips, discover new destinations, and make your travel experiences seamless.</p>
              <div className="flex justify-center">
                <button className="btn">Learn more</button>
                <button className="link-btn">View Live</button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-ful lg:mb-0 sm:mb-0 md:mb-0 mb-8">
              <img className="object-cover object-center rounded-2xl" alt="hero" src="https://dummyimage.com/720x600" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}