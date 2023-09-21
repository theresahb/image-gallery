import React from 'react'
import './style.css'

const Search = ({ setSearchTerm }) => {
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div>
            <form action="#" className='search-form'>
                <div className="search-input">
                    <input 
                        type="search" 
                        name="search" 
                        id="" 
                        placeholder='Search keyword...'
                        onChange={handleSearch} 
                    />
                </div>
            </form>
        </div>
    )
}

export default Search