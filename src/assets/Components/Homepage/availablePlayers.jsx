import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";


const availablePlayers = ({ players }) => {
    return (
        <>
            <div className='max-w-330 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
                {players.map((player) => (
                    <div className='mx-auto' key={player.playerName}>
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title"><FaUser />{player.playerName}</h2>
                                <div className='flex justify-between'>
                                    <p className='flex gap-2 items-center'><FaFlag />{player.playerCountry}</p>
                                    <button className='btn'>{player.playerType}</button>
                                </div>
                                <div className="divider"></div>
                                <p className='font-bold'>Rating:</p>
                                <div className='flex justify-between'>
                                    <p>{player.battingStyle}</p>
                                    <p className='text-right'>{player.bowlingStyle}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className='font-bold flex items-center'>Price: <FiDollarSign />{player.price}</p>
                                    <button className="btn">Choose Player</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default availablePlayers;