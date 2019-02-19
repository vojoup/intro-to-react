import React, { Component } from 'react'

import Piece from '../../assets/flat-part.svg';
import './Flat-piece.css';

export default class FlatPiece extends Component {
    render() {
        return (
            <div>
                <img src={Piece} alt="Flat piece" className="flat-piece" />
            </div>
        )
    }
}
