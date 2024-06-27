import Posts from '@/components/Posts'
import React from 'react'
import { AddPost } from './Addpost'


const page = () => {
  return (
    <div className='flex flex-col'>
        <Posts />
    </div>
  )
}

export default page