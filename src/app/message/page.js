'use client'
import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
function page() {
  const [socket, setsocket] = useState(undefined)
  useEffect(() => {
    const socket =io("http://localhost:3000")
  }, [])
  
  return (
    <div>page</div>
  )
}

export default page