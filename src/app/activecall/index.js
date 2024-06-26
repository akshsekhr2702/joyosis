import {useSearchParams} from 'next/navigation'

export default function RoomPage(){
    const searchParams = useSearchParams()
    const roomId = searchParams.get("roomId")
    return(
        <>
        <h1>{roomId}</h1>
        </>
    )
}