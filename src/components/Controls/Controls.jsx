import React, { Component } from 'react'

import './Controls.css';

export default class Controls extends Component {
    render() {
        const { add, remove } = this.props;
        return (
            <div id="controls">
                <button onClick={add}>Add</button>
                <button onClick={remove}>Remove</button>
            </div>
        )
    }
}
