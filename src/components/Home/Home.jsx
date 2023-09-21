import {  signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import Gallery from "../Gallery/Gallery";
import './style.css'
import { useState } from "react";
import Search from "../Search/Search";
import Keywords from "../Keywords/Keywords";
import Footer from "../Footer/Footer";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth)
        .then(() => {
            navigate("/");
            console.log("Signed out successfully")
        })
        .catch((error) => {
            console.log(error)
        });
    }
    
    return (
        <div className="home flex">
            <div className="header flex">
                <div className="icon-search flex">
                    <p className="icon">Arc</p>
                    <Search setSearchTerm={setSearchTerm} />
                </div>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <Keywords setSearchTerm={setSearchTerm} />
            <Gallery searchTerm={searchTerm} />
            <Footer />
        </div>
    ) 
}

export default Home