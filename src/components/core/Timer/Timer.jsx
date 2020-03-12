import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Icon } from 'ripio-icons';


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        if (this.state.seconds === this.props.expiringTime) {
            clearInterval(this.timer);
            this.props.onFinish();
        } else {
            this.setState({
                seconds: this.state.seconds + 1
            });
        }
    }

    render() {
        const seconds = String(this.state.seconds).length === 1
            ? '0' + String(this.state.seconds)
            : String(this.state.seconds);

        return (
            <Icon
                name="icon-timer"
                seconds={seconds}
                time={this.props.expiringTime}
            />);
    }
}

Timer.propTypes = {
    /**
     * Value to end count.
    */
    expiringTime: PropTypes.number.isRequired,
    /**
     * Function to execute when time ends.
    */
    onFinish: PropTypes.func.isRequired
};

export default Timer;
