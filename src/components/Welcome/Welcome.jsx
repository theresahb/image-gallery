import { NavLink } from 'react-router-dom'
import './style.css'

const WelcomePage = () => {
    return (
        <div className="welcome-page flex">
            <p className="welcome-icon">Arc Gallery</p>
            <div className='welcome flex'>
                <h1>Get Started</h1>
                <div className="welcome-sub flex">
                    <button type='submit'>
                        <NavLink to="/signup" className='b-link'>
                            Sign Up
                        </NavLink>
                    </button>
                    <button type="submit">
                        <NavLink to="/login" className='b-link'>
                            Sign In
                        </NavLink>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage