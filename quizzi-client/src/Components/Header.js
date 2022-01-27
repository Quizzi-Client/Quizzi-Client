import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <NavLink exact="true" to="/">Home</NavLink>
            <NavLink to="/MyGames">My Games</NavLink>
        </div>
    )
}

export default Header;