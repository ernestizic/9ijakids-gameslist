import React, { useState } from 'react'

const GroupFilter = ({getGroup}) => {
    const [group, setGroup] = useState('')

    const onChange =(g)=> {
        setGroup(g);
        getGroup(g);
    }
    return (
        <div className='group-filter'>
            <label htmlFor='group'>Filter by Group: </label>
            <select id='group' name='group' onChange={(e)=> onChange(e.target.value)} value={group}>
                <option disabled defaultValue>Select an Option</option>
                <option>All Groups</option>
                <option>Academic</option>
                <option>Financial Literacy</option>
            </select>
        </div>
    )
}

export default GroupFilter
