import { useState } from 'react'
import { auth } from '../../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { NavLink, useNavigate } from 'react-router-dom'
import Loader from '../../Loader/Loader'
import './style.css'

const SignIn = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const signIn = async () => {
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if (user) {
                console.log(user)
                navigate('/home')
            }
        })
        .catch((error) => {
            if (error.code === "auth/user-not-found") {
                setErrorMessage("User not found. Please sign up!");
            } else {
                setErrorMessage("An error occurred. Please try again.");
            }
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsLoading(true);
        setEmail('')
        setPassword('')
    }

    return (
        <div className='sign-in flex'>
            <form action="" className='sign-in-form flex' onSubmit={handleSubmit}>
                <h1>Welcome</h1>
                {errorMessage && <p>{errorMessage}</p>}
                <div className="input">
                    <input type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    name="" id="email" placeholder='Email' />
                </div>
                <div className="input">
                    <input type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    name="" id="password" placeholder='Password' />
                </div>
                <button type="submit" onClick={signIn} disabled={isLoading} >{isLoading ? <Loader /> : "Login"}</button>
            </form>
            <p className="">
                No account yet? {' '}
                <NavLink to="/signup">
                    Sign up
                </NavLink>
            </p>
        </div>
    )
}

export default SignIn