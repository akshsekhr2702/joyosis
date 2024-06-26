import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import User from "../users/User"
import { Users } from "../users/users"
  
  export default function SuggestedUsers() {
    const userdata = Users.map((data)=>{
     return   <User key={data.name}  name = {data.name} email = {data.email} initials = {data.initials}/>
    })

    return (
      <Card>
        <CardHeader>
          <CardTitle> Suggested Users</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8">
          
          {userdata}
        </CardContent>
      </Card>
    )
  }
  