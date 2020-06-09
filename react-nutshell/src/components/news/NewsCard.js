import React, { Component } from 'react';

class NewsCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          
          <h3>News Title: <span className="card-newsTitle">Doodles</span></h3>
          <p>Breed: Poodle</p>
        </div>
      </div>
    );
  }
}

export default NewsCard;