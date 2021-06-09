import React from 'react'

const GameItem = ({game}) => {
    return (
        <div className='game-card'>
            <img src={game.GameImage} alt='game Img' />
            <p style={{paddingTop: '10px', fontWeight: 'bold'}}>{game.GameTitle}</p>
            <p style={{paddingTop: '30px'}}>{game.GameDescription}</p>
        </div>
    )
}

export default GameItem
