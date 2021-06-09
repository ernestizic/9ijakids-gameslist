import React, { useState } from 'react'

const Searchbar = ({getQuery}) => {
    const [searchWord, setSearchWord] = useState('');

    const onChange =(q)=> {
        setSearchWord(q);
        getQuery(q);
    }

    return (
        <div className='search-div'>
            <input 
                type='search'
                placeholder='Search games by Topic'
                value={searchWord}
                onChange={(e)=> onChange(e.target.value)}
                className="no-outline"
            />
        </div>
        
    )
}

export default Searchbar
