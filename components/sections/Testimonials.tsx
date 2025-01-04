import React from 'react';
import { testimonials } from "@/data"
import { TestimonialsProps } from "@/interfaces"

const TestimonialCard = ({ description, className, user }: TestimonialsProps & { className?: string }) => (
  <div className={`relative ${className}`}>

    <div className="mx-5 mt-7 flex flex-row place-items-center space-x-2">
      <img
        className='w-10 h-10 rounded-full outline outline-1 outline-gray-100 outline-offset-1'
        src={user?.avatar.src}
      />
      <div className='flex flex-col'>
        <p className='font-bold'>{user?.name}</p>
        <p className='text-xs text-gray-800'>{user?.role}</p>
      </div>
    </div>
    <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
      <div className="px-8 pt-2 sm:px-10 sm:pt-5">
        <p className="mt-2 text-sm text-gray-600 text-center">{description}</p>
      </div>
      <div className="flex flex-1 items-center justify-center px-8 py-6">
      </div>
    </div>
    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
  </div>
);

const Testimonials = () => (
  <div id="testimonials" className="py-10">
    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-center text-base font-semibold text-indigo-600">Testimonials</h2>
      <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
        What our customers are saying
      </p>
      <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  </div>
);

export default Testimonials;