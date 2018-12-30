import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Modal from 'react-modal';

import { fetchJokes, fetchCategories } from '../../api';
import { JokesList } from './jokes-list';
import spinner from './spinner.gif';

export class component extends React.Component {
  componentDidMount() {
    this.handleGetMore();
    // fetchCategories().then(this.props.setCategories);
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
    console.log('handleGetMore');
    // fetchJokes().then(this.props.appendJokes);
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
  handleChangeCategory = event => {
    console.log('handleChangeCategory', event.target.value);
    this.props.setActiveCategory(event.target.value);
  };

  renderCategories = () => {
    return (
      <select value={this.props.category} onChange={this.handleChangeCategory}>
        <option value="">Show all</option>
        {this.props.categories.map(category => {
          return <option key={category}>{category}</option>;
        })}
      </select>
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
        transform: 'translate(-50%, -50%)'
      }
    };
    const containerStyles = !!this.state.selectedJoke
      ? {
          overflow: 'hidden',
          height: '100vh'
        }
      : {};
    const containerClassName = !!this.state.selectedJoke ? 'no-scroll' : '';
    // .no-scroll {
    //   ..
    // }

    return (
      <div
        className="dashboard"
        // style={containerStyles}
      >
        <h2>JOKES</h2>
        <Modal
          isOpen={!!this.state.selectedJoke}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
          onRequestClose={this.handleRequestClose}
        >
          {this.state.selectedJoke && this.state.selectedJoke.value}
        </Modal>
        {this.renderCategories()}
        <InfiniteScroll
          pageStart={0}
          loadMore={this.handleGetMore}
          hasMore={true}
          initialLoad={false}
          loader={
            this.props.isFetching && (
              <div className="loader" key={0}>
                <img width="50" height="50" src={spinner} alt="spinner gif" />
              </div>
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
