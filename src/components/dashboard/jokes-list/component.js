import React from 'react';
import PropTypes from 'prop-types';

import { SingleJoke } from '../single-joke';

export class component extends React.Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    jokes: PropTypes.array.isRequired,
    selectJoke: PropTypes.func.isRequired
  };

  renderJokes = () => {
    return this.props.jokes
      .filter(joke => {
        if (!this.props.category) {
          return true;
        }
        return joke.category === this.props.category;
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
