import { useState } from 'react'
import { auth } from '../../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { NavLink, useNavigate } from 'react-router-dom'
import Loader from '../../Loader/Loader'
import './style.css'

const SignUp = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const signUp = async () => {
        setIsLoading(true);
        setErrorMessage(""); // Clear any previous error messages

        // Validate email and password
        if (!email || !password) {
            setErrorMessage("Please fill in all fields.");
            setIsLoading(false);
            return;
        }

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email.match(emailPattern)) {
            setErrorMessage("Please enter a valid email address.");
            setIsLoading(false);
            return;
        }

        // Password validation
        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
        if (!password.match(passwordPattern)) {
            setErrorMessage("Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long.");
            setIsLoading(false);
            return;
        }

        // if (password.length < 8) {
        //     setErrorMessage("Password must be at least 8 characters long.");
        //     setIsLoading(false);
        //     return;
        // }

        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            navigate('/login')
        })
        .catch((error) => {
            if (error.code === "auth/email-already-in-use") {
                setErrorMessage("You already have an account. Please sign in!");
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
        signUp();
    }

    return (
        <div className='sign-up flex'>
            <form action="" className='sign-up-form flex' onSubmit={handleSubmit}>
                <h1>Create your Account</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="input">
                    <input type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    name="" id="email2" placeholder='Email' />
                </div>
                <div className="input">
                    <input type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    name="" id="password2" placeholder='Password' />
                </div>
                <button type="submit" disabled={isLoading} >{isLoading ? <Loader /> : "Sign Up"}</button>
            </form>
            <p>
                Already have an account?{' '}
                <NavLink to="/login" >
                    Sign in
                </NavLink>
            </p> 
        </div>
    )
}

export default SignUp







// import { useState } from 'react'
// import { auth } from '../../../firebase'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { NavLink, useNavigate } from 'react-router-dom'
// import Loader from '../../Loader/Loader'
// import './style.css'

// const SignUp = () => {
//     const navigate = useNavigate()

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [errorMessage, setErrorMessage] = useState("");
//     const [isLoading, setIsLoading] = useState(false);

//     const signUp = async () => {
//         await createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log(user)
//             navigate('/login')
//         })
//         .catch((error) => {
//             if (error.code === "auth/email-already-in-use") {
//                 setErrorMessage("You already have an account. Please sign in!");
//             } else {
//                 setErrorMessage("An error occurred. Please try again.");
//             }
//         })
//         .finally(() => {
//             setIsLoading(false)
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         setIsLoading(true);
//         setEmail('')
//         setPassword('')
//     }

//     return (
//         <div className='sign-up flex'>
//             <form action="" className='sign-up-form flex' onSubmit={handleSubmit}>
//                 {errorMessage && <p>{errorMessage}</p>}
//                 <h1>Create your Account</h1>
//                 <div className="input">
//                     <input type="email" 
//                     value={email} 
//                     onChange={(e) => setEmail(e.target.value)} 
//                     name="" id="email2" placeholder='Email' />
//                 </div>
//                 <div className="input">
//                     <input type="password" 
//                     value={password} 
//                     onChange={(e) => setPassword(e.target.value)}
//                     name="" id="password2" placeholder='Password' />
//                 </div>
//                 <button type="submit" onClick={signUp} disabled={isLoading} >{isLoading ? <Loader /> : "Sign Up"}</button>
//             </form>
//             <p>
//                 Already have an account?{' '}
//                 <NavLink to="/login" >
//                     Sign in
//                 </NavLink>
//             </p> 
//         </div>
//     )
// }

// export default SignUp