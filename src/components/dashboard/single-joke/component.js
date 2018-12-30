import React from 'react';

export class component extends React.Component {
  handleClick = () => {
    this.props.selectJoke(this.props.joke);
  };

  render() {
    return (
      <div className="joke" onClick={this.handleClick}>
        {/* <h3>Category: {this.props.joke.category}</h3> */}
        <h3>{this.props.joke.value}</h3>
      </div>
    );
  }
}
