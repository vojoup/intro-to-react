import React, { Component } from 'react'

import Base from '../../assets/flat-part.svg';
import './Flat-base.css';

export default class FlatBase extends Component {
    render() {
        return (
            < div className="piece-container" >
                <img src={Base} alt="Flat base" id="base" />
            </div >
        )
    }
}
