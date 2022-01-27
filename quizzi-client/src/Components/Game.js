import React, { Component } from 'react';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        }

        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }

    edit() {
        this.setState({
            editing: true
        })
    }

    delete() {
        console.log("Delete it");
    }
    render() {
        return(
            <div className='Game'>
                <p>Quizzi Game</p>
                <span>
                    <button>Edit</button>
                    <button>Delete</button>
                </span>
            </div>
        );
    }
}

export default Game;