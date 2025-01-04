import React from 'react';
import { faqs } from "@/data"
import { FAQsProps } from "@/interfaces"

const FAQsCard = ({ question, answer, className, image, alt }: FAQsProps & { className?: string }) => (
  <div className={`relative${className}`}>
    <div className="absolute inset-px border-transparent"></div>
    <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
      <div className="px-8 pt-8 sm:px-10 sm:pt-10">
        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 text-center">{question}</p>
        <p className="mt-2 text-sm text-gray-600 text-center">{answer}</p>
      </div>
      <div className="flex flex-1 items-center justify-center px-8 py-6">
        <img className="w-full max-w-sm object-cover" src={image} alt={alt} />
      </div>
    </div>
  </div>
);

const FAQs = () => (
  <div id="faqs" className="py-10">
    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-center text-base font-semibold text-indigo-600">FAQs</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
		Frequently Asked Questions
      </p>
      <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        {faqs.map((faq, index) => (
          <FAQsCard key={index} {...faq} />
        ))}
      </div>
    </div>
  </div>
);

export default FAQs;