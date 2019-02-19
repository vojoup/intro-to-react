import React, { Component } from 'react'

import './Town.css';
import FlatBase from '../Flat-base/Flat-base';
import FlatPiece from '../Flat-piece/Flat-piece';
import Controls from '../Controls/Controls';

export default class Town extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flatPieces: [],
            message: null
        };

        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    add() {
        this.setState((state) => {
            if (state.flatPieces.length < 8) {
                return { flatPieces: [...state.flatPieces, <FlatPiece />], message: null }
            } else {
                return { flatPieces: [...state.flatPieces], message: "Too many flat pieces" }
            }
        })
    }

    remove() {
        this.setState((state) => {
            if (state.flatPieces.length > 0) {
                const [first, ...rest] = state.flatPieces;
                return { flatPieces: [...rest], message: null }
            } else {
                return { flatPieces: [...state.flatPieces], message: "Add some flat pieces first" }
            }
        })
    }

    render() {
        const { flatPieces, message } = this.state;
        console.log(flatPieces)
        return (
            <>
                <div id="town">
                    <Controls add={this.add} remove={this.remove} />
                    <FlatBase />
                    {flatPieces}
                </div>
                <p id="message">{message}</p>
            </>
        )
    }
}
