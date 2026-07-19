import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../lib/api";


export default function LoginPage () {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handlelogin() {
        
        // axios.post("http://localhost:3000/users/login",
        //     {
        //         email : email,
        //         Password : password
        //     }
        // )

        api.post("/users/login",{
            email : email,
            password : password
        })
        .then(
            (res)=>{

                toast.success("Login Successful")
                console.log(res.data.token)
                console.log(res.data.isAdmin)

                //browser store
                localStorage.setItem("token", res.data.token)

            }
        ).catch(
            
            (err)=>{
                console.log(err)
                toast.error("Login Failed")
            }
        )
    }

    return (
        <div className="w-full h-full bg-[url('/bg.jpg')] bg-cover bg-center flex justify-center items-center">

            <div className="w-[450px] h-[580px] backdrop-blur-md shadow 2xl rounded-lg p-6  flex flex-col items-center">

                <img src="logo.png" className="w-[150px] h-[70px] object-cover bg-accent/40 rounded-lg"/>
                <h1 className="text-xl font-bold text secondary mt-5">Login</h1>

                <label className="w-full mt-5 text-secondary  font-semibold">Email</label>

                <input 
                    value={email}
                    onChange={(e) => {
                        //toast.success(e.target.value)
                        setEmail(e.target.value)
                    }}
                    type="email" className="w-full h-10 rounded-lg bg-secondary/20 border-2 border-accent focus:border-accent outline-none px-2 text-secondary" placeholder="user@gmail.com"/> 

                <label className="w-full mt-5 text-secondary  font-semibold">Password</label>

                <input 
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    type="password" className="w-full h-10 rounded-lg bg-secondary/20 border-2 border-accent focus:border-accent outline-none px-2 text-secondary" placeholder="............"/>
                <p className="w-full text-right">Forget Password? Reset <Link to="reset password" className="text-accent font-bold">Here</Link></p> 

                <button onClick={handlelogin} className="w-full h-12 rounded-lg bg-accent text-white font-bold mt-5 hover:bg-accent/90 transition duration-300">Login</button>
                <p className="w-full text-right">Do not have an account? Register <Link to="/register" className="text-accent font-bold">Here</Link></p>

                <button className="w-full h-12 bg-secondary/20 rounded-lg  text-secondary font-bold mt-5 hover:text-white transition colors flex items-center justify-center gap-2"><FcGoogle />Login with Google</button>

            </div>
        </div>
    )
}