"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";


export default function activecallPage(){
    const [value, setValue] = useState()
    const router = useRouter()
    const handleJoinRoom = useCallback(() => {
        router.push(`/room/${value}`)
    }, [])
    return (
        <>
            <div className="">
                <input value = {value} onChange={(e) => setValue(e.target.value)} type="text"/>
                <button onClick={handleJoinRoom}>Join</button>
            </div>
        </>
    )
}