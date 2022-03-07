import React, {useState} from 'react'
import './Login.css'

import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";



const Login = () => {
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [show, setShow] = useState (false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    return ( 
        <div className="Login">
            <div className="Login-logo">
                <img src="https://e7.pngegg.com/pngimages/148/892/png-clipart-computer-icons-user-symbol-light-client-icon-service-computer-thumbnail.png"
                    alt="Login App">
                        </img>
            </div> 
            <div className="Login-right">       
                <h1> Acessar App</h1>   
            <div className="Login-LoginInputEmail" >
                <MdEmail/>
                <input
                    type="email"
                    placeholder="Digite um Email"
                    value={email}
                    onChange= {e => setEmail(e.target.value)}
                    />
            </div>
            <div className="Login-LoginInputPassword" >
                <MdLock/>
                <input
                    type={show ? "text" : "password"}
                    placeholder="Digite sua senha"
                    value={password}
                    onChange= {e => setPassword(e.target.value)}
                    />
                
                <div className="Login-eye">
                    {show ?(
                        <HiEye 
                            size={20}
                            Onclick={handleClick}
                        />
                    ) : (
                        <HiEyeOff
                        size={20}
                        Onclick={handleClick}
                        />
                    )}

                
                </div>
            </div>  

            
            <button type="submit">
                Entrar    
            </button>
            
            <h4> Não possuo conta!</h4>

            <button type="submit">
                Registrar   
            </button>
        </div>
    </div>
    )
}

export default Login;