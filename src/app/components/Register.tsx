import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"

export default function Login(){
    const router = useRouter()
    const { register, handleSubmit, reset} = useForm()
    const onSubmit = async (data: any) => {
        console.log("form submitted");
        console.log(data);
        reset()
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log("Success:", responseData);
                router.push('/')
                // Handle successful response
            } else {
                console.error("Error:", response.statusText);
                // Handle errors
            }
        } catch (error) {
            console.error("Error:", error);
            // Handle fetch errors
        }
    }
    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
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