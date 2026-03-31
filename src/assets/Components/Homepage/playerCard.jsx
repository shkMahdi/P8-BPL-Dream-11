import {useState} from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";

const PlayerCard = ({player, coin, setCoin}) => {
    const [selected, setSelected] = useState(false);
    const handleCoin = () => {
        if(coin - player.price >= 0){
            setSelected(true);
            setCoin(coin - player.price);
            alert(player.playerName + " is selected!");
        }else{
            alert("Coins not enough!");
        }

    }
    return (
        <div className='mx-auto'>
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
                        <button onClick={()=> handleCoin()} className="btn btn-success" disabled={selected}>
                            {selected ? "Selected" : "Choose Player"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;