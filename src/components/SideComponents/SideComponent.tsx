import React from 'react'
import SuggestedUsers from './SuggestedUsers'
import Profile from './Profile'

const SideComponent = () => {
  return (
    <div className='h-dvh fixed right-0 top-0 bottom-0 border-l-2 flex flex-col  px-4 gap-4 py-4 '>
      <Profile />
    <SuggestedUsers />
    </div>
  )
}

export default SideComponent