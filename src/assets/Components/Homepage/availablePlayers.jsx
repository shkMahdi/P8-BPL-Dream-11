import PlayerCard from './playerCard';

const AvailablePlayers = ({ players, coin, setCoin, selectedPlayers, setSelectedPlayers }) => {
    
    return (
        <>
            <div className='max-w-330 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-8'>
                {players.map((player) => (
                    <PlayerCard player={player} key={player.playerName} coin={coin} setCoin = {setCoin} selectedPlayers = {selectedPlayers} setSelectedPlayers = {setSelectedPlayers}></PlayerCard>
                ))}
            </div>
        </>
    );
};

export default AvailablePlayers;