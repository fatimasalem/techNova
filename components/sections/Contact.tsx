"use client"
import React from "react"
import { IconChevronDown } from "@tabler/icons-react"
import { Field, Label, Switch } from '@headlessui/react'

const Contact = () => {
	const [agreed, setAgreed] = React.useState(false)

	return (
	  <div id="contact" className="place-content-center rounded-2xl py-10">
		<div className="mx-auto max-w-7xl lg:px-8">
		  <div className="relative place-items-center isolate h-full overflow-hidden p-10 bg-gray-900 px-6 pt-16 shadow-2xl rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
		  <svg
			  viewBox="0 0 1024 1024"
			  aria-hidden="true"
			  className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
			>
			  <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
			  <defs>
				<radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
				  <stop stopColor="#7775D6" />
				  <stop offset={1} stopColor="#E935C1" />
				</radialGradient>
			  </defs>
			</svg>

			<div className="mx-auto place-content-center max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
			  <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
			  	Get in Touch with Us
			  </h2>
			  <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              	Have questions or need assistance? Our team at TechNova Solutions is here to help. Whether you&apos;re
              	looking for product information, support, or custom solutions, we&apos;re just a message away. Reach out
              	to us today and let&apos;s innovate together!
			  </p>
			</div>
			<div className="flex mt-10">
			<form action="#" method="POST" className="mx-auto max-w-xl">
				<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
				<div>
					<label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-100">
					First name
					</label>
					<div className="mt-2.5">
					<input
						id="first-name"
						name="first-name"
						type="text"
						autoComplete="given-name"
						className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
					/>
					</div>
				</div>
				<div>
					<label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-100">
					Last name
					</label>
					<div className="mt-2.5">
					<input
						id="last-name"
						name="last-name"
						type="text"
						autoComplete="family-name"
						className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
					/>
					</div>
				</div>
				<div className="sm:col-span-2">
					<label htmlFor="company" className="block text-sm/6 font-semibold text-gray-100">
					Company
					</label>
					<div className="mt-2.5">
					<input
						id="company"
						name="company"
						type="text"
						autoComplete="organization"
						className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
					/>
					</div>
				</div>
				<div className="sm:col-span-2">
					<label htmlFor="email" className="block text-sm/6 font-semibold text-gray-100">
					Email
					</label>
					<div className="mt-2.5">
					<input
						id="email"
						name="email"
						type="email"
						autoComplete="email"
						className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
					/>
					</div>
				</div>
				<div className="sm:col-span-2">
					<label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-100">
					Phone number
					</label>
					<div className="mt-2.5">
					<div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
						<div className="grid shrink-0 grid-cols-1 focus-within:relative">
						<select
							id="country"
							name="country"
							autoComplete="country"
							aria-label="Country"
							className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
						>
							<option>US</option>
							<option>CA</option>
							<option>EU</option>
						</select>
						<IconChevronDown
							aria-hidden="true"
							className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
						/>
						</div>
						<input
						id="phone-number"
						name="phone-number"
						type="text"
						placeholder="123-456-7890"
						className="block rounded-lg min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
						/>
					</div>
					</div>
				</div>
				<div className="sm:col-span-2">
					<label htmlFor="message" className="block text-sm/6 font-semibold text-gray-100">
					Message
					</label>
					<div className="mt-2.5">
					<textarea
						id="message"
						name="message"
						rows={4}
						className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
						defaultValue={''}
					/>
					</div>
				</div>
				<Field className="flex gap-x-4 sm:col-span-2">
					<div className="flex h-6 items-center">
					<Switch
						checked={agreed}
						onChange={setAgreed}
						className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
					>
						<span className="sr-only">Agree to policies</span>
						<span
						aria-hidden="true"
						className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
						/>
					</Switch>
					</div>
					<Label className="text-sm/6 text-gray-100">
					By selecting this, you agree to our{' '}
					<a href="#" className="font-semibold text-indigo-500">
						privacy&nbsp;policy
					</a>
					.
					</Label>
				</Field>
				</div>
				<div className="mt-10">
				<button
					type="submit"
					className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Let&apos;s talk
				</button>
				</div>
			</form>
			</div>
		  </div>

		</div>
	  </div>
	)
  }

  export default Contact