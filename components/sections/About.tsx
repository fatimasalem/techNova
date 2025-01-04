const About = () => {
	return (
	  <div id="about" className="py-24 sm:py-32">
		<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
		  <h2 className="text-center text-base/7 font-semibold text-indigo-600">Innovate Seamlessly</h2>
		  <p className="mx-auto mt-2 max-w-2xl text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
			Empowering Businesses with Cutting-Edge Technology
		  </p>
		  <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
			<div className="relative lg:row-span-2">
			  <div className="absolute inset-px rounded-lg lg:rounded-l-[2rem]"></div>
			  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
				<div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
				  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
					Optimized for Mobility
				  </p>
				  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
					Experience seamless functionality across devices. Our solutions are tailored to deliver excellence on the go.
				  </p>
				</div>
				<div className="relative min-h-[30rem] w-full grow">
				  <div className="absolute bottom-0 left-0 right-10 top-10 overflow-hidden rounded-tr-xl bg-gray-900 shadow-2xl">
					<img
				  	  className="size-full object-cover object-top"
					  src="/assets/pages/about1.avif"
					  alt="Mobile friendly design"
					/>
				  </div>
				</div>
			  </div>
			  <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
			</div>
			<div className="relative max-lg:row-start-1">
			  <div className="absolute inset-px rounded-lg max-lg:rounded-t-[2rem]"></div>
			  <div className="relative flex h-[20rem] flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
				<div className="px-8 pt-8 sm:px-10 sm:pt-10">
				  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Unmatched Performance</p>
				  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
					Delivering lightning-fast performance for complex operations, ensuring efficiency and scalability.
				  </p>
				</div>
					<div className="absolute top-36">
					<img
						className="w-full max-lg:max-w-xs mt-2"
						src="/assets/pages/about2.avif"
						alt="High-performance systems"
						/>
					</div>
			  </div>
			  <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
			</div>
			<div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
			  <div className="absolute inset-px rounded-lg "></div>
			  <div className="relative flex h-[20rem] flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
				<div className="px-8 pt-8 sm:px-10 sm:pt-10">
				  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Robust Security</p>
				  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
					Safeguard your data with advanced encryption and industry-leading security measures.
				  </p>
				</div>
				<div className="absolute top-36">
				  <img
				  	className="w-full max-lg:max-w-xs mt-2"
					src="/assets/pages/about3.avif"
					alt="Robust security"
				  />
				</div>
			  </div>
			  <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
			</div>
			<div className="relative lg:row-span-2">
			  <div className="absolute inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
			  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
				<div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
				  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
					Powerful Integrations
				  </p>
				  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
					Unlock the potential of seamless integration with APIs designed for interoperability and growth.
				  </p>
				</div>
				<div className="relative min-h-[30rem] w-full grow">
				  <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
					<img
				  	  className="size-full object-cover object-top"
					  src="/assets/pages/about4.avif"
					  alt="Mobile friendly design"
					/>
				  </div>
				</div>
			  </div>
			  <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
			</div>
		  </div>
		</div>
	  </div>
	);
  };

  export default About;