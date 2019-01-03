import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Modal from 'react-modal';
import Select from 'react-select';
import PropTypes from 'prop-types';

import { fetchJokes, fetchCategories } from '../../api';
import { JokesList } from './jokes-list';
import loading from './loading.gif';

export class component extends React.Component {
  static propTypes = {
    setCategories: PropTypes.func.isRequired,
    appendJokes: PropTypes.func.isRequired,
    setJokesFetching: PropTypes.func.isRequired,
    setJokesReceived: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    setActiveCategory: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired,
    jokes: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.handleGetMore();

    fetchCategories().then(categories => {
      this.props.setCategories(categories);
    });
  }

  state = {
    selectedJoke: null
  };

  selectJoke = joke => this.setState({ selectedJoke: joke });

  handleRequestClose = () => {
    this.selectJoke(null);
  };

  handleGetMore = () => {
    if (this.props.isFetching) return;
    this.props.setJokesFetching();
    fetchJokes()
      .then(jokes => {
        this.props.appendJokes(jokes);
        this.props.setJokesReceived();
      })
      .catch(error => {
        this.props.setJokesReceived();
      });
  };
  handleChangeCategory = category => {
    this.props.setActiveCategory(category);
  };

  renderCategories = () => {
    const options = this.props.categories.map(category => {
      return {
        value: category,
        label: category
      };
    });

    const allOptions = [{ value: '', label: 'All Categories' }, { options }];

    return (
      <div className="select">
        <Select
          placeholder={'Select a Category'}
          value={this.props.category}
          onChange={this.handleChangeCategory}
          options={allOptions}
        />
      </div>
    );
  };

  render() {
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#f8fafa'
      }
    };

    const containerClassName = !!this.state.selectedJoke ? 'no-scroll' : '';

    return (
      <div className={`dashboard ${containerClassName}`}>
        <div className="navbar">
          <h2>
            <img
              src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
              alt="avatar"
            />
            Chuck Norris Jokes
          </h2>
          {this.renderCategories()}
        </div>
        <div className="modalContainer">
          <Modal
            isOpen={!!this.state.selectedJoke}
            style={customStyles}
            ariaHideApp={false}
            onRequestClose={this.handleRequestClose}
          >
            {this.state.selectedJoke && (
              <div className="modal">
                <img src={this.state.selectedJoke.icon_url} alt="icon" />
                <h3>{this.state.selectedJoke.value}</h3>
                <h4>Category: {this.state.selectedJoke.category}</h4>
                <a href={this.state.selectedJoke.url} target="blank">
                  {' '}
                  Joke Link
                </a>
              </div>
            )}
          </Modal>
        </div>

        <InfiniteScroll
          pageStart={0}
          loadMore={this.handleGetMore}
          hasMore={true}
          initialLoad={false}
          loader={
            this.props.isFetching && (
              <img className="loader" src={loading} key={0} alt="spinner gif" />
            )
          }
        >
          <JokesList
            jokes={this.props.jokes}
            category={this.props.category}
            selectJoke={this.selectJoke}
          />
        </InfiniteScroll>
      </div>
    );
  }
}
