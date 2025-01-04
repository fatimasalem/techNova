import { Menu as HeadlessMenu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import {
	IconMenu3
} from "@tabler/icons-react"

import { navigation } from '@/data'
import Link from 'next/link'

export default function Menu() {
  return (
      <HeadlessMenu>
        <MenuButton className="inline-flex items-center gap-2 py-1.5 px-3 text-sm/6 font-semibold text-gray-900">
          <IconMenu3 className='h-6 w-6' />
          {/* <ChevronDownIcon className="size-4 fill-white/60" /> */}
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom start"
          className="w-full mt-5 origin-top-right bg-white p-1 text-sm/6 text-gray-900 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
			{navigation.map((item, index) => (
				<MenuItem key={index}>
          <Link href={item.href}>
					<button className="group flex w-full items-center gap-2 py-1.5 px-3 data-[focus]:bg-white/10 uppercase tracking-wider">
						{item.name}
					</button>
          </Link>
				</MenuItem>
			))}
        </MenuItems>
      </HeadlessMenu>
  )
}
