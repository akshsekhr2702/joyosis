import { useForm } from "react-hook-form"

export default function Login(){
    const { register, handleSubmit, reset} = useForm()
    return(
        <>
            <form onSubmit={handleSubmit(data => {
                        console.log("form submitted")
                        console.log(data)
                        reset()
                    })}>
                    <h1>Create Account</h1>

                    <span>or use your email for registration</span>
                    <input
                        type="text"
                        id="username"
                        {...register("username")}
                        placeholder="Your name"
                    />
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
                    <button className ="bg-green-500" type="submit">Sign Up</button>
                </form>
        </>
    )
}