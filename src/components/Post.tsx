import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Avatar } from './ui/avatar'
import { Heart, MessageCircleDashed } from 'lucide-react'
import Image from 'next/image'


const Post = (props: any) => {
  return (
    <Card className='w-full '>
        <CardHeader className=' bg-slate-600 w-full'>
            <CardTitle>{props.name}</CardTitle>
            <CardDescription className='text-muted-foreground'>@{props.username}</CardDescription>
        </CardHeader>
        <CardContent className='flex  flex-col gap-3'>
            <Image src={props.image} alt='post' width={500} height={500} />
            {props.content}
        </CardContent>
        <CardFooter className='flex justify-between items-center'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <Heart />
                {props.likes}{" "}Likes
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <MessageCircleDashed />
                {props.comments}{" "}Comments

            </div>
        </CardFooter>
    </Card>
  )
}

export default Post