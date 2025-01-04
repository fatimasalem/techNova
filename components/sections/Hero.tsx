const Hero = () => {
  return (
    <div className="h-screen bg-gray-900 rounded-2xl mt-5">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#gradient-techNova)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="gradient-techNova">
                <stop stopColor="#4F46E5" />
                <stop offset={1} stopColor="#9333EA" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Empower Your Business with Innovation.
            </h2>
            <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              Unlock new opportunities with our cutting-edge solutions. Seamlessly transform your workflows and achieve more with <span className="uppercase font-bold text-indigo-500">TechNova&apos;s</span> advanced tools and technology.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-indigo-500 shadow-sm border transition translate-x-1 bg-white hover:bg-white/90 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <button>
                  Get Started
                </button>
              </a>
              <a href="#learn-more" className="text-sm/6 font-semibold text-white">
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="TechNova Dashboard Screenshot"
              src="/assets/pages/hero.avif"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
            {/* <video
              src="https://cdn.dribbble.com/userupload/6060953/file/original-88cc20dd3c35b15139b56f516354c05d.mp4"
              autoPlay
              muted
              loop
              width={1824}
              height={1080}
              // className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              className="absolute left-20 top-0 w-[57rem] max-w-none rounded-md ring-1 ring-white/10"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;