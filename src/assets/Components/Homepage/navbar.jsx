import React from 'react';
import navLogo from "../../logo.png"
import dollarImage from "../../dollar_1.png"

const navbar = () => {
    return (
        <div className="navbar max-w-330 mx-auto bg-base-100 shadow-sm">
            <div className="navbar-start">
                <a className='w-18'>
                    <img src={navLogo} alt="" />
                </a>
            </div>
            <div className="navbar-end flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Fixture</a></li>
                    <li><a href="">Teams</a></li>
                    <li><a href="">Schedules</a></li>
                    <li>
                        <div className='flex font-bold'>
                            <p>0 Coin</p>
                            <img src={dollarImage} alt="" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default navbar;