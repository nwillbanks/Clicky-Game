import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default function () {
  return (
    <div
      transitionName="loadingItem"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
      <img className="feed__loading-item" src={img} />
    </div>
  )
}

export default class Feed extends Component {
  ...
  render() {
    return (
      <div className="feed">
        ...
        {this.props.items.length > this.state.loadedItems.length &&
          <LoadingItem />
        }
        ...
      </div>
    )
  }
}

export default class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = { loadedItems: [] }
  }
  onLoad(feedItem) {
    this.setState(({ loadedItems }) => {
      return { loadedItems: loadedItems.concat(feedItem) }
    })
  }
  render() {
    return (
      <div className="feed">
        <h1 className="feed__h1">{this.props.name}</h1>
        {this.state.loadedItems.map((item, i) =>
          <FeedItem
            imgPath={item.imgPath}
            name={item.name}
            renderModal={this.props.renderModal}
            key={i} />
        )}
        {this.props.items.length > this.state.loadedItems.length &&
          <LoadingItem />
        }
        <div className="hidden">
          {this.props.items.map((item, i) =>
            <img 
              src={item.imgPath} 
              onLoad={this.onLoad.bind(this, item)} 
              key={i} />
          )}
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
