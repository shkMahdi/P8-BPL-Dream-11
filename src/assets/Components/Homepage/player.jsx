import React, { use } from 'react';

const Player = ({playerPromise}) => {
    const data = use(playerPromise);
    return (
        <div>
            <p>Number of players: {data.length}</p>
        </div>
    );
};

export default Player;