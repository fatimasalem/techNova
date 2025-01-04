import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import Menu from './Menu'
import { navigation } from '@/data'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <Disclosure as="nav">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative mt-2 place-items-center flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 bottom-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <Menu />
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="lg:flex shrink-0 items-center mt-2 hidden">
              <p className='text-black uppercase tracking-wider font-bold'>techNova</p>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      'text-black hover:bg-gray-100 hover:rounded-lg',
                      'px-3 py-2 text-sm font-medium uppercase tracking-wider transition duration-200 ease-out transform translate-x-1 translate-y-1 group-hover:-translate-x-0 group-hover:-translate-y-0',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <Link href="#contact" className="relative inline-block px-4 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 rounded-lg bg-gray-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-gray-900 rounded-lg group-hover:bg-gray-900"></span>
              <span className="relative text-black group-hover:text-white text-sm uppercase tracking-wider">Contact us</span>
          </Link>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}

export default Navbar