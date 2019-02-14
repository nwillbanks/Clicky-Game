import React, { Component } from 'react';

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