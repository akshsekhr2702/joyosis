import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const Profile = () => {
  return (
    <Card>
        <CardHeader className='flex flex-row gap-4'>
            <div>
            <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>AK</AvatarFallback>
    </Avatar>
            </div>
            <div><CardTitle>Akshyanshu</CardTitle>
            <CardDescription>@aksh_sekhr</CardDescription></div>
        </CardHeader>
    </Card>
  )
}

export default Profile