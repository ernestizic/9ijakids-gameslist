import React, {useState} from 'react'

const LevelFilter = ({getLevel}) => {
    const [level, setLevel] = useState('')

    const onChange =(l)=> {
        setLevel(l);
        getLevel(l);
    }

    return (
        <div className='level-filter'>
            <label htmlFor='level'>Filter by Level: </label>
            <select id='level' name='level' onChange={(e)=> onChange(e.target.value)} value={level}>
                <option disabled defaultValue>Select an Option</option>
                <option>All Levels</option>
                <option>Key Stage 1</option>
                <option>Key Stage 2</option>
                <option>Financial Literacy</option>
            </select>
        </div>
    )
}

export default LevelFilter
