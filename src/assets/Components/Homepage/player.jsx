import { use, useState } from 'react';
import AvailablePlayers from './availablePlayers'
import SelectedPlayers from './selectedPlayers';

const Player = ({playerPromise, coin, setCoin}) => {
    const players = use(playerPromise);
    const [playerCatagory, setPlayerCatagory] = useState("available");
    const [selectedPlayers, setSelectedPlayers] = useState([]);

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
                        Selected({selectedPlayers.length})
                    </button>
                </div>
            </div>
            {
                playerCatagory === "available" ? <AvailablePlayers players={players} coin={coin} setCoin = {setCoin} selectedPlayers = {selectedPlayers} setSelectedPlayers = {setSelectedPlayers}/> : 
                <SelectedPlayers selectedPlayers = {selectedPlayers} setSelectedPlayers = {setSelectedPlayers} coin={coin} setCoin = {setCoin}></SelectedPlayers>
            }
        </div>
    );
};

export default Player;