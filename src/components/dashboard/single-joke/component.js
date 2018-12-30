import React from 'react';

export class component extends React.Component {
  handleClick = () => {
    this.props.selectJoke(this.props.joke);
  };

  render() {
    return (
      <div
        onClick={this.handleClick}
        // style={{
        //   cursor: 'pointer',
        //   padding: '10px',
        //   border: '1px solid black',
        //   margin: '0 5px 5px 5px'
        // }}
      >
        {this.props.joke.category}: {this.props.joke.value}
      </div>
    );
  }
}
