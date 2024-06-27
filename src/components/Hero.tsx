import Image from 'next/image'
import React from 'react'
 
  
import { Button } from './ui/button'
import Link from 'next/link'


const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
    <div className='h-full w-full grid grid-cols-2  items-center justify-center p-32'>
        <div className='flex flex-col justify-center  gap-4'><h1 className='text-6xl font-semibold py-4 text-green-400'>Bridging Hearts, Building Connections</h1>
        <p className='text-xl '>Join a community where genuine connections thrive. Our app is designed to help you find meaningful relationships and combat loneliness.</p>
       <Link href='#'> <Button>Get Started today</Button></Link>
        </div>
        <div><Image src={'/happy.png'} alt='img' width={400} height={400} /></div>

    </div>
    <div className='h-dvh  flex flex-col justify-center items-center p-32 w-full '>
    <h1 className='text-6xl font-bold text-start pb-16 text-yellow-400'>Acitvities to keep you engaged</h1>
    
    <p className='text-2xl'>"<span className='text-blue-600 '>Enter a New Dimension of Fun: Connect, Play, Explore {" "}</span>Try out our new 3D simulated VR world where you can connect with friends, play exciting games, and explore limitless possibilities. Dive into an immersive experience like never before!"</p>
    <Link href={'/login'}> <Button className='w-80 ' variant={'secondary'}>
    "Explore Now"
    </Button></Link>
</div>
<div className=' flex flex-col items-center justify-center px-40 py-10'>
<h1 className='text-4xl font-bold text-start pb-16 text-red-600'>Create Your Own Community: Connect, Chat, and Vibe with Like-minded People</h1>
    
    <p className='text-2xl'>Dive into a world of endless possibilities with our new feature that lets you create your own chat rooms and invite random strangers to join your community. Imagine hosting engaging discussions, lively debates, or just casual hangouts where everyone feels welcomed. Whether you're into gaming, music, tech, or simply looking for interesting conversations, our platform allows you to tailor your chat rooms to attract people who share your passions. Experience the thrill of meeting new people, exchanging ideas, and building meaningful connections in a space where you can truly vibe with your kind. Create your room, set the mood, and watch your community flourish with vibrant interactions and unforgettable moments. Join us and turn every chat into an adventure!!"</p>
    <Link href={'/login'}> <Button className='w-80 ' variant={'secondary'}>
    "Explore Now"
    </Button></Link>
</div>
</div>
  )
}

export default Hero