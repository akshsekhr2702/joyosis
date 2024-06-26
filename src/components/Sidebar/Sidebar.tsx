"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Bell, Home, LineChart, LogOut, MessageCircle, Package, Package2, ShoppingCart, User2Icon, Users } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { ModeToggle } from '../Mode-toggle'

const Sidebar = () => {

    



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
                href="#"
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
                Messages
                
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <User2Icon className="h-4 w-4" />
                Account{" "}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
          <div className='flex items-center justify-start px-5 py-5'>
            <Button>
            <LogOut />LogOut
            </Button>

          </div>
          
        </div>
    </div>
  )
}

export default Sidebar