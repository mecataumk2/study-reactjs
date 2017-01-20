import React from 'react';
import BookStore from './BookStore';

var InputExample = React.createClass({
    getInitialState() {
        return (
            { name: '-' }
        );
    },

    handleChange(event) {
        this.setState({ name: event.target.value });
    },

    render() {
        return (
            <input type="text"
                value={this.state.name}
                onChange={this.handleChange} />
        );
    }
});

/*React.render(<BookStore />, document.getElementById('root'));*/
React.render(<InputExample />, document.getElementById('root'));