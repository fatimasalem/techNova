import { productFeatures } from "@/data"

const Products = () => {
	return (
	  <div id="products" className="">
		<div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
		  <div>
			<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Key Features and Specifications
			</h2>
			<p className="mt-4 text-gray-500">
            	TechNova&apos;s cutting-edge platform is designed to empower businesses with intelligent tools and seamless
            	functionality. Explore the features that make our solutions indispensable for growth.
			</p>

			<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
			  {productFeatures.map((feature) => (
				<div key={feature.name} className="border-t border-gray-200 pt-4">
				  <dt className="font-medium text-gray-900">{feature.name}</dt>
				  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
				</div>
			  ))}
			</dl>
		  </div>
		  <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
			<img
			  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
			  src="/assets/pages/product1.avif"
			  className="rounded-lg bg-gray-100 h-56 w-full object-cover"
			/>
			<img
			  alt="Top down view of walnut card tray with embedded magnets and card groove."
			  src="/assets/pages/product2.avif"
			  className="rounded-lg bg-gray-100 h-56 w-full object-cover"
			/>
			<img
			  alt="Side of walnut card tray with card groove and recessed card area."
			  src="/assets/pages/product3.avif"
			  className="rounded-lg bg-gray-100 h-56 w-full object-cover"

			/>
			<img
			  alt="Walnut card tray filled with cards and card angled in dedicated groove."
			  src="/assets/pages/product4.avif"
			  className="rounded-lg bg-gray-100 h-56 w-full object-cover"
			/>
		  </div>
		</div>
	  </div>
	)
  }

export default Products;