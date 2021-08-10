import axios from 'axios';
import { useState } from 'react';




function Login() {

    const [email, setEmail] = useState("");
    const [password, setPasswords] = useState("");
    

    async function Logins(e) {
        e.preventDefault();

        try{
            
         const LoginData = {
             email,
             password,
            
         };
        
         await axios.post("http://localhost:4000/sign/login", LoginData, {
             withCredentials: true,
         });

        }catch(err){
             console.error(err);
             
        }
    }



    return (
        <div>
            <br></br>
            <h1>Log in to your account</h1>
        <form onSubmit={Logins}>
       <input type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        /><br/><br/>

       <input type="password"
        placeholder="password"
       onChange={(e) => setPasswords(e.target.value)}
       value={password}
       /><br/><br/>

       
        
        <button type="submit">Login</button>
        </form>
        </div>
   
    )
}

export default Login
