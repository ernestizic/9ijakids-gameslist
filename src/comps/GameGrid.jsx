import React from 'react'
import GameItem from './GameItem'

const GameGrid = ({clonedGames, isLoading}) => {
    let grid = isLoading ? (
        <div className='loading'><p>Loading...</p></div>
    ) : (
        <div className='game-cards'>
            {
                clonedGames.map(game => (
                    <GameItem key={game.GameTitle} game={game}/>
                ))
            }
        </div>
    )
    return (
        <div>
            {grid}
        </div>
    )
}

export default GameGrid
