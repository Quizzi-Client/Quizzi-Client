import React, { Component } from 'react';
import Game from './Game';

class GamesList extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return(
            <div className='Games-list'>
                <Game/>
            </div>
        )
    }
}

export default GamesList;