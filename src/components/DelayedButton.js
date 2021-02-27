// Code DelayedButton Component Here
import React from 'react';

export default class DisplayedButton extends React.Component{
    render() {
        return (
            <button onClick={this.handleClick}>Delayed</button>
        )
    }

    handleClick = (e) => {
        e.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }
}
