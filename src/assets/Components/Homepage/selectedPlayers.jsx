import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";

const selectedPlayers = ({selectedPlayers, setSelectedPlayers, coin, setCoin}) => {
    const handleDelete = (player) => {
        setSelectedPlayers(selectedPlayers.filter(p => p.playerName !== player.playerName));
        setCoin(coin + player.price);
    };

    console.log(selectedPlayers);
    return (
        <div>
             {
                selectedPlayers.map((selectedPlayer) => {
                    return (
                        <div key={selectedPlayer.playerName} className='max-w-330 mx-auto border border-gray-400 grid grid-cols-1 p-3 my-7 rounded-md'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className='text-xl font-bold'>{selectedPlayer.playerName}</p>
                                    <p>{selectedPlayer.battingStyle}</p>
                                </div>
                                <div>
                                  <button onClick={() => handleDelete(selectedPlayer)} className='bg-red-200 p-2 rounded-full'><RiDeleteBinLine /></button>  
                                </div>
                            </div>
                        </div>
                    );
                })
             }
        </div>
    );
};

export default selectedPlayers;