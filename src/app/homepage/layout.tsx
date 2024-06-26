import React from 'react'
import '@/app/homepage/page'
import Sidebar from '@/components/Sidebar'
const layout = ({children} :any) => {
  return (
    <div className='flex'>
        <Sidebar />
        {children}
    </div>
  )
}

export default layout