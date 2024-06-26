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
                    {/* <a href="#">Forget Your Password?</a> */}
                    <button className="bg-blue-600" type="submit">Sign In</button>
                </form>
        </>
    )
}