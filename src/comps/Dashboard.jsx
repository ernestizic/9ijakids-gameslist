import React, {useState, useEffect} from 'react'
import GameGrid from './GameGrid';
import GroupFilter from './GroupFilter';
import LevelFilter from './LevelFilter';
import Searchbar from './Searchbar';

const Dashboard = () => {
    const [games, setGames] = useState([]);
    const [clonedGames, setClonedGames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        const fetchGames = async ()=> {
            setIsLoading(true)
            const res = await fetch(`https://cors.bridged.cc/http://bit.ly/TeaserTask`)
            const data = await res.json();
            console.log(data);
            setGames(data);
            setIsLoading(false);
        }
        fetchGames();
    }, [])

    useEffect(() => {
        setClonedGames(games)
    }, [games])

    const getQuery =(q)=> {
        setClonedGames([...games.filter(game => (
            game.Topic.toLowerCase().includes(q.toLowerCase())
        ))])
    }

    const getGroup =(group)=> {
        if (group === 'All Groups'){
            setClonedGames([...games])
        }else{
            setClonedGames([...games.filter(game =>(
                game.Group === group
            ))])
        }
    }

    const getLevel =(level)=> {
        if (level === 'All Levels'){
            setClonedGames([...games])
        }else{
            setClonedGames([...games.filter(game =>(
                game.Level === level
            ))])
        }
    }

    return (
        <div className='dashboard'>
            <Searchbar getQuery={getQuery}/>

            <div className='side-content'>
                <h5>Filter by Groups and Levels</h5>
                <GroupFilter getGroup={getGroup}/>
                <LevelFilter getLevel={getLevel}/>
            </div>
            <div className='main-content'>
                <GameGrid games={games} isLoading={isLoading} clonedGames={clonedGames} />
            </div>
            
        </div>
    )
}

export default Dashboard
