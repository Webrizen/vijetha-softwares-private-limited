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
            <h1 className="title-font sm:text-8xl text-6xl my-4 font-bold bg-clip-text text-transparent gradient-animation animate-fade-down animate-once animate-ease-in-out">Unlocking</h1>
            <h3 className='sm:text-4xl text-3xl my-4 font-bold bg-clip-text text-transparent gradient-animation animate-fade-down animate-once animate-ease-in-out'>Digital Potential.</h3>
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
          <div className="flex flex-wrap sm:p-0 py-4 px-4 gap-0 justify-center items-center animate-fade-down animate-once animate-ease-in-out bg-[rgba(225,225,225,0.1)] hover:bg-[rgba(225,225,225,0.2)] cursor-pointer rounded-3xl overflow-hidden mt-8">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0 rounded-3xl">
              <img className="object-cover object-center rounded-2xl" alt="hero" src="https://dummyimage.com/720x600" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300">Futuristic Stock Prediction
              </h1>
              <p className="mb-8 leading-relaxed">Protect your assets and support your financial growth with our upcoming app. Our state-of-the-art stock prediction technology will empower you to make informed investment decisions.</p>
              <div className="flex justify-center">
                <button className="btn">Learn more</button>
                <button className="link-btn">View Live</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row md:flex-row flex-wrap sm:p-0 py-4 px-4 sm:gap-0 md:gap-0 justify-center items-center animate-fade-down animate-once animate-ease-in-out bg-[rgba(225,225,225,0.1)] hover:bg-[rgba(225,225,225,0.2)] cursor-pointer rounded-3xl overflow-hidden mt-6">
            <div className="lg:flex-grow md:w-1/2 lg:p-8 md:p-8 flex flex-col md:items-start md:text-left mb-2 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300"> Vyaasa - Online Learning Made Lively
              </h1>
              <p className="mb-8 leading-relaxed">Elevate your learning experience with "Vyaasa," our upcoming app designed to nurture growth from school to college. Whether you're a student or job seeker, "Vyaasa" provides the skills and knowledge you need for career advancement. <br /> <br />

                Explore these projects and discover how we're shaping the future with innovative technology solutions.</p>
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
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="lg:text-7xl mb-4 h1">Our Team</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Meet the dedicated members of our team who drive innovation and excellence.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-amber-700">Nookambika Mani</h2>
                  <h3 className="text-gray-500 mb-3">Founder & Chairperson</h3>
                  <p className="mb-4">Driving innovation and privacy in AI-powered social networking.</p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/201x201" />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-amber-700">Shubhankali Patel</h2>
                  <h3 className="text-gray-500 mb-3">Managing Director</h3>
                  <p className="mb-4">Leading our efforts to simplify travel and tourism with MyRide.</p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/204x204" />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-amber-700">Jayandra Babu</h2>
                  <h3 className="text-gray-500 mb-3">CEO</h3>
                  <p className="mb-4">Driving our vision for a brighter future in technology.</p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/206x206" />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-amber-700">Adarsh Jha</h2>
                  <h3 className="text-gray-500 mb-3">CTO</h3>
                  <p className="mb-4">Leading our technological advancements as Chief Technology Officer.</p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/206x206" />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-amber-700">Manas Dutta</h2>
                  <h3 className="text-gray-500 mb-3">CMO</h3>
                  <p className="mb-4">Leading our marketing efforts to reach and connect with our audience.</p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/206x206" />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-amber-700">Manjari</h2>
                  <h3 className="text-gray-500 mb-3">CMO</h3>
                  <p className="mb-4">Bringing creativity and innovation to our marketing strategies.</p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-2 sm:w-4/5 w-full p-3 mx-auto">
        <div className="flex justify-center">
          <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-12 px-6 text-3xl font-bold">Contact us</h2>
          </div>
        </div>

        <div className="flex flex-wrap bg-[rgba(225,225,225,0.1)] py-12 px-5 rounded-2xl">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
            <form>
              <div className="relative mb-4">
                <label for="Name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="Name" name="Name" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="inline-flex text-white bg-gradient-to-r from-red-400 to-amber-500 background-animate border-0 py-2 px-6 focus:outline-none rounded text-base">Send Message</button>
              <p className="text-xs text-gray-500 mt-3">"Rest assured, your inbox won't be bombarded. By sharing your email with us, you're aiding in safeguarding our website against unwanted traffic, including bots and more."</p>
            </form>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6 ">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-amber-500 bg-amber-200">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">
                      Technical support
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      support@example.com
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-amber-500 bg-amber-200">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">
                      Sales questions
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      sales@example.com
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="align-start flex">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-amber-500 bg-amber-200">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">Press</p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      press@example.com
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="align-start flex">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-amber-500 bg-amber-200">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">Bug report</p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      bugs@example.com
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <iframe
                width="100%"
                height="230px"
                className='rounded-2xl'
                title="map"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                vnb-frameid="627"
                style={{
                  filter: 'opacity(0.8)',
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}