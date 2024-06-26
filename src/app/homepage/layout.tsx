import React from 'react'
import '@/app/homepage/page'
import Sidebar from '@/components/Sidebar/Sidebar'
import SideComponent from '@/components/SideComponents/SideComponent'

const layout = ({children} :any) => {
  return (
    <div className='flex w-screen justify-center gap-4 '>
        <Sidebar />
        {children}
        <SideComponent />
    </div>
  )
}

export default layout