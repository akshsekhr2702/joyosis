import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
 
export function AddPost() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Link href={'/'}>Create Post</Link>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Enter your file
            </Label>
           <Input placeholder="Enter your file" type="file" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Caption
            </Label>
            <Input
              id="username"
              className="col-span-3"
              type="text"
              placeholder="Enter the Caption"
            />
          </div>
        </div>
        <DialogFooter>
          <Button  type="submit">Create Post</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}