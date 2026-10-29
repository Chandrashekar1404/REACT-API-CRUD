import { useNavigate } from "react-router"

export default function Login(){


    const navigate=useNavigate()

    function handleLogin(){
        // performs login logic 

        let name="lithil"

        if(name=="lithil"){
            console.log("login successful")
            navigate("/dashboard")
        }else{
            console.log("invalid credential")
        }

        
    }
    return(
        <>
        <h2>Login page</h2>

        <button onClick={handleLogin}>Login</button>
        </>
    )
}