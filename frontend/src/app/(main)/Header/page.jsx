"use client";
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { IoMdArrowDropright } from "react-icons/io";
import { MegaMenu, Navbar } from 'flowbite-react'
import { HiArrowRight, HiChevronDown } from 'react-icons/hi';
import './header.css'
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMapPin } from "react-icons/fa";

const services = [
  { name: 'Auditing & Certifications', description: 'Management System & Product Compliances', href: '#', icon: ChartPieIcon },
  { name: 'Inspection Services', description: 'Management System & Product Compliances', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Product Testing Services', description: 'Product Compliances and Performances', href: '#', icon: FingerPrintIcon },
  { name: 'Training Services', description: 'Lead Auditor and Internal Auditor Courses', href: '#', icon: SquaresPlusIcon },

]

const standard = [
  { name: 'ISO 9001:2015', description: 'Quality Management System', href: '#', icon: ChartPieIcon },
  { name: 'ISO 14001:2015', description: 'Environmental Management System', href: '#', icon: CursorArrowRaysIcon },
  { name: 'ISO 45001:2018', description: 'Occupational Health & Safety', href: '#', icon: FingerPrintIcon },
  { name: 'ISO 22000:2018', description: 'Food Safety', href: '#', icon: SquaresPlusIcon },

]
const standard2 = [
  { name: 'ISO 27001:2013', description: 'Information Security', href: '#', icon: ChartPieIcon },
  { name: 'ISO 20000-1:2018', description: 'IT-Service Management', href: '#', icon: CursorArrowRaysIcon },
  { name: 'ISO 37001:2016', description: 'Anti-bribery Management', href: '#', icon: FingerPrintIcon },
  { name: 'ISO 22301:2019', description: 'Business Continuity', href: '#', icon: SquaresPlusIcon },

]
const standard3 = [
  { name: 'CE Mark', description: 'Product Certificate', href: '#', icon: ChartPieIcon },
  { name: 'GMP', description: 'Good Manufacturing Practice', href: '#', icon: CursorArrowRaysIcon },
  { name: 'GDP', description: 'Good Distribution Practice', href: '#', icon: FingerPrintIcon },
  { name: 'GLP', description: 'Good Laboratory Practice', href: '#', icon: SquaresPlusIcon },

]
const products = [
  { name: 'ISO 9001 Certification', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'ISO 27001 Certification', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'ISO 14001 Certification', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'ISO 45001 Certification', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'ISO 22000 Certification', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  { name: 'ISO 22301 Certification', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },

]
const location = [
  { name: 'ASIA', href: '#', icon: ChartPieIcon },
  { name: 'NORTH AMERICA', href: '#', icon: CursorArrowRaysIcon },
  { name: 'SOUTH AMERICA', href: '#', icon: FingerPrintIcon },
  { name: 'EUROPE', href: '#', icon: SquaresPlusIcon },
  { name: 'AFRICA', href: '#', icon: ArrowPathIcon },

]
const callsToAction = [
  { name: 'ISO 37001 Certification', href: '#', icon: PlayCircleIcon },
  { name: 'ISO 20000-1 Certification', href: '#', icon: PhoneIcon },
]

const products1 = [
  { name: ' CE Mark ', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: ' GDP Certification', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: ' GLP Certification', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: ' GMP Certification', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },

]
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 font-Montserrat">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="logo.png" className="h-12 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </a>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Services
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="flex font-Montserrat absolute -left-[840px] top-full z-30 mt-3 w-screen max-w-screen-2xl overflow-hidden rounded-md bg-white shadow-lg  transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className='flex-1 px-10'>
                <h2 className='uppercase mt-5 text-lg font-extrabold font-Lato tracking-wider '>Business <span className='text-tri'>Services</span></h2>
                <img src="img3.avif" className='h-72 w-auto mt-4 mb-10   pr-5' alt="" />
              </div>
              <div className="p-4 flex-1 mt-6">
                {services.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div> */}
                    <div className="flex-auto">
                      <a href={item.href} className="block font-bold text-xl text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-0 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex-1'>
                <img src="img5.avif" className='h-80 w-auto mt-9 ' alt="" />
              </div>
              {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div> */}
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Standard
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="flex font-Montserrat absolute -left-[980px] top-full z-30 mt-3 w-screen max-w-screen-2xl overflow-hidden rounded-md bg-white shadow-lg  transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className='flex-shrink px-10'>
                <h2 className='uppercase mt-5 text-lg font-extrabold font-Lato tracking-wider '>Certification <span className='text-tri'>Services</span></h2>
                <img src="service2.avif" className='h-72 w-auto mt-4 mb-10   pr-5' alt="" />
              </div>
              <div className="p-4 flex-1">
                {standard.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div> */}
                    <div className="flex-auto">
                      <a href={item.href} className="block font-bold text-xl text-gray-900 ">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-0 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 flex-1">
                {standard2.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div> */}
                    <div className="flex-auto">
                      <a href={item.href} className="block font-bold text-xl text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-0 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 flex-1">
                {standard3.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div> */}
                    <div className="flex-auto">
                      <a href={item.href} className="block font-bold text-xl text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-0 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div> */}
            </PopoverPanel>
          </Popover>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Sectors
          </a>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Location
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="flex font-Montserrat p-5 absolute -left-[1200px] top-full z-30 mt-3 w-screen max-w-screen-2xl overflow-hidden rounded-md bg-white shadow-lg  transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >

              <div className="p-4 items-center flex-1    ">
                <h2 className='flex p-4 uppercase mt-5 text-xl font-extrabold font-Lato tracking-wider '>
                  Global &nbsp; <span className='text-tri'>Presence</span>
                </h2>

                {location.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center  gap-x-4 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div> */}
                    <div className="flex-auto">
                      <a href={item.href} className="flex gap-x-2 font-bold text-md text-gray-900">
                        <FaMapPin className='mt-1' /> {item.name}
                        <span className="absolute inset-0" />
                      </a>

                    </div>

                  </div>
                ))}
                <div className="flex p-4 justify-between  border-b-4 border-t-2 border-r-2 border-l-2 border-pri">
                  <h2 className='flex gap-x-2 '> <MdEmail className='mt-1' />sistemacerts@gmail.com</h2>
                  <h2 className='flex gap-x-2 '><IoCallSharp className='mt-1' />+91 63 9001 9004</h2>
                </div>
              </div>

              <div className='flex-1'>
                <img src="map.avif" className='h-96 aspect-video  mt-4 mb-10  ' alt="" />
              </div>
              {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div> */}
            </PopoverPanel>
          </Popover>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </a>
        </PopoverGroup>

      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden font-Kanit tracking-wider">
        <div className="fixed inset-0 z-10 " />

        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="logo.png"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Services
                </a>
                <Disclosure as="div" className="-mx-3">

                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    ISO Standards
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block  rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        <span className="flex items-center"><IoMdArrowDropright />{item.name}</span>
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">

                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Certified Clients
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products1,].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block  rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        <span className="flex items-center"><IoMdArrowDropright />{item.name}</span>
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Download
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  ISO 50001 Certification
                </a>
              </div>
              <div className="py-6">
                <form className="max-w-md mx-auto">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search ..."
                      required=""
                    />
                    <button
                      type="submit"
                      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
