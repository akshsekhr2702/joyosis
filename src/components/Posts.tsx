import React from 'react'
import Post from './Post'
import { feedData } from './post/data.feed'

const Posts = () => {

  const feedDatas = feedData.map((data)=>{
    return(
      <Post key={data.name} image={data.images} name={data.name} username ={data.username} content = {data.caption} likes = {data.likes} comments = {data.comments}/>
    )
  })


  return (
    <div className='w-full flex flex-col justify-center items-start gap-4'>
        {feedDatas}
    </div>
  )
}

export default Posts