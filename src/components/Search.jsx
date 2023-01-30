import React, { useState } from 'react'
import { useSearchParams } from "react-router-dom";

const SearchIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute left-3 top-1/2 -translate-y-1/2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>

)

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [text, setText] = useState("");

    const handleInputChange = (e) => {
        setText(e.target.value)
        setSearchParams({
            q: e.target.value
        })
    }


    return (
        <div className='relative md:w-2/4'>
            <SearchIcon />
            <input type="text" value={text} onChange={handleInputChange} className='w-full pl-12 py-2 bg-white rounded' placeholder='Search for a country...' />
        </div>
    )
}

export default Search