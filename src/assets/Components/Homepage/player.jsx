import React, { use } from 'react';
import AvailablePlayers from '../Homepage/availablePlayers'

const Player = ({playerPromise}) => {
    const players = use(playerPromise);
    return (
        <AvailablePlayers players={players}/>
    );
};

export default Player;