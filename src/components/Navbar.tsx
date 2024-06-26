import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center px-10 py-7'>
        <div className='text-3xl font-bold'>Logo</div>
        <div className='flex justify-center items-center gap-4 text-xl'>
            <Link href={'/pages/community'}>Home</Link>
            <Link href={'/'}>About</Link>
            <Link href={'/'}>Community</Link>
            <Link href={'/'}>Some</Link>
        </div>
        <div className='flex gap-4'>
          <Link href={'/login'} ><Button variant={'default'}>Login</Button></Link>
        <Link href='/login' ><Button variant={'outline'}>SignUp</Button></Link>
       </div>
    </div>
  )
}

export default Navbar