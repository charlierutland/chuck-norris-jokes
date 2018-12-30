import React from 'react';

import { SingleJoke } from '../single-joke';

export class component extends React.Component {
  renderJokes = () => {
    return this.props.jokes
      .filter(joke => {
        // todo: update this
        if (!this.props.category.value) {
          return true;
        }
        return joke.category === this.props.category.value;
      })
      .map(joke => (
        <SingleJoke
          key={joke.id}
          joke={joke}
          selectJoke={this.props.selectJoke}
        />
      ));
  };

  render() {
    return (
      <div>
        <div className="jokes-list">{this.renderJokes()}</div>
      </div>
    );
  }
}
