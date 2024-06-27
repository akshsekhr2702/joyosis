"use client";

import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";

export default function Login(){
    const router = useRouter()
    const { register, handleSubmit, reset} = useForm()
    const onSubmit = async(data : any)=>{
        console.log('form Submitted')
        console.log(data)
        reset()
        try {
            const res = await fetch('/api/login',{
                method : 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(data),
            })
            if(res.ok){
                const respdata = await res.json()
                console.log('Succesfully',respdata)
                router.push('/page')
            }
            else{
                console.log('Error',
                    res.statusText
                )
            }
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Sign In</h1>

                    <span>or use your email password</span>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        id="password"
                        {...register("password")}
                        placeholder="Password"
                    />
                
                    <button className="bg-blue-600" type="submit">Sign In</button>
                </form>
        </>
    )
}