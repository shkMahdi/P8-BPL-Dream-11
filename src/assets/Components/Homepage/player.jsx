import React, { use, useState } from 'react';
import AvailablePlayers from '../Homepage/availablePlayers'

const Player = ({playerPromise}) => {
    const players = use(playerPromise);
    const [playerCatagory, setPlayerCatagory] = useState("selected");

    return (
        <div className='max-w-330 mx-auto my-8'>
            <div className='flex justify-between'>
                {
                    playerCatagory === "available" ? 
                        (<h1 className='font-bold text-2xl'>Available Players</h1>) : 
                        (<h1 className='font-bold text-2xl'>Selected Players</h1>)
                }
                <div className='flex'>
                    <button onClick={() => setPlayerCatagory('available')} 
                        className={`btn ${playerCatagory === 'available' ? "bg-yellow-300" : ""} rounded-r-none rounded-xl font-bold`}>
                        Available
                    </button>
                    <button onClick={() => setPlayerCatagory('selected')} 
                        className={`btn ${playerCatagory === 'selected' ? "bg-yellow-300" : ""} rounded-l-none rounded-xl font-bold`}>
                        Selected()
                    </button>
                </div>
            </div>
            <AvailablePlayers players={players}/>
        </div>
    );
};

export default Player;