import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={'/'} className="text-gray-400 hover:text-white">First Link</Link>
          </li>
          <li>
            <Link href={'/'} className="text-gray-400 hover:text-white">Second Link</Link>
          </li>
          <li>
            <Link href={'/'} className="text-gray-400 hover:text-white">Third Link</Link>
          </li>
          <li>
            <Link href={'/'} className="text-gray-400 hover:text-white">Fourth Link</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={'/'} className="text-gray-400 hover:text-white">First Link</Link>
          </li>
          <li>
            <Link href={'/'} className="text-gray-400 hover:text-white">Second Link</Link>
          </li>
          <li>
            <Link href={'/'} className="text-gray-400 hover:text-white">Third Link</Link>
          </li>
          <li>
            <Link href={'/'} className="text-gray-400 hover:text-white">Fourth Link</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={'/'} className="text-gray-400 hover:text-white">First Link</Link>
          </li>
          <li>
            <Link href={'/'} className="text-gray-400 hover:text-white">Second Link</Link>
          </li>
          <li>
            <Link href={'/'} className="text-gray-400 hover:text-white">Third Link</Link>
          </li>
          <li>
            <Link href={'/'} className="text-gray-400 hover:text-white">Fourth Link</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SUBSCRIBE</h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <Label htmlFor="footer-field" className="leading-7 text-sm text-gray-400">Placeholder</Label>
            <Input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
        </div>
        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
          <br className="lg:block hidden" />waistcoat green juice
        </p>
      </div>
    </div>
  </div>
  <div className="bg-gray-800 bg-opacity-75">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <Link href={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        
        <span className="ml-3 text-xl">BitBusters</span>
      </Link>
      <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">© 2024 BitBusters —
        <Link href={'/'}  className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@joyosis</Link>
      </p>
      
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer