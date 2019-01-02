import React from 'react';
import PropTypes from 'prop-types';

export class component extends React.Component {
  static propTypes = {
    joke: PropTypes.object.isRequired,
    selectJoke: PropTypes.func.isRequired
  };

  handleClick = () => {
    this.props.selectJoke(this.props.joke);
  };

  render() {
    return (
      <div className="joke" onClick={this.handleClick}>
        <h3>{this.props.joke.value}</h3>
      </div>
    );
  }
}
