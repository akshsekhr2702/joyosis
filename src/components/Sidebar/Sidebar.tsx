"use client"
import React,{useState} from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { BadgePlus, Bell, Blend, Home, LineChart, LogOut, MessageCircle, Package, Package2, ShoppingCart, User2Icon, Users } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { ModeToggle } from '../Mode-toggle'
import { useRouter } from 'next/navigation'
import { AddPost } from '@/app/homepage/Addpost'

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const router = useRouter();

  const handleVideoClick = () => {
    router.push("/room/1");
  };

  const handleEventsClick = () => {
    router.push("/room/1");
  };

  return (
    <div className='w-96 border-r-2 h-dvh fixed left-0 top-0 bottom-0'>
        <div className="flex h-full max-h-screen flex-col gap-2 ">
          <div className="flex h-14 items-center justify-between border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Joyosis</span>
            </Link>
            <ModeToggle />
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Hero Page
              </Link>
              <Link
                href="/homepage"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Chat
              </Link>
              {/* <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <User2Icon className="h-4 w-4" />
                Account{" "}
              </Link> */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary w-full text-left"
                >
                  <MessageCircle className="h-4 w-4" />
                  Activities
                </button>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">Memory Game</li>
                    <li className="dropdown-item">3 Cups 1 Ball</li>
                    {/* Add more items as needed */}
                  </ul>
                )}
              </div>
              <Link
                href="/room/1"
                onClick={handleEventsClick}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <BadgePlus/>
                Events  
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Blend className="h-4 w-4" />
                <AddPost />  
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Progress
              </Link>
            </nav>
          </div>
          <div className='flex items-center justify-start px-5 py-5 gap-[185px]'>
            <Link href={'/login'}>
              <Button>
                <LogOut />LogOut
              </Button>
            </Link>
            <Button onClick={handleVideoClick}>
              Video
            </Button>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
  