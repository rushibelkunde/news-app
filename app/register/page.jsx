'use client'
import React from "react";
import { signUp } from "@/configs/auth";
import { useRouter } from 'next/navigation'

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            setEmail("")
            setPassword("")
            return alert(error)
            
        }

        // else successful
        console.log(result)
        return router.push("/")
    }
    return (<div className="wrapper">
        <div className="form-wrapper">
            <h1 className="mt-40  font-bold text-center text-3xl">Register</h1>
            <form onSubmit={handleForm} className="flex flex-col items-center gap-2 mt-5">

                <input className="p-2 bg-slate-100 rounded-xl w-72" value={email}
                onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />


                <input className="p-2 bg-slate-100 rounded-xl w-72" value={password}
                onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />

                <button className="bg-black p-2 rounded-xl text-white font-semibold" type="submit">Register</button>
            </form>
        </div>
    </div>);
}

export default Page;