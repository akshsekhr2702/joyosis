import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const User = (props:any) => {
  return (
    <div className="flex items-center gap-4">
    <Avatar className="hidden h-9 w-9 sm:flex">
      <AvatarImage src="/avatars/01.png" alt="Avatar" />
      <AvatarFallback>{props.initials}</AvatarFallback>
    </Avatar>
    <div className="grid gap-1">
      <p className="text-sm font-medium leading-none">{props.name}</p>
      <p className="text-sm text-muted-foreground">
        {props.email}
      </p>
    </div>
    
  </div>
  )
}

export default User