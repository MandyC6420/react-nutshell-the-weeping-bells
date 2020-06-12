import React, { Component } from 'react';

class NewsCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          
          <h3><span className="card-newstitle">{this.props.news.title}</span></h3>
          <p>Synopsis: {this.props.news.synopsis}</p>
          <a href={this.props.news.url}><p>{this.props.news.url}</p></a>
          <p>{this.props.news.date}</p>
          <button type="button" onClick={() => this.props.deleteNews(this.props.news.id)}>Delete</button>
          <button type="button"
        onClick={() => {this.props.history.push(`/news/${this.props.news.id}/edit`)}}>Edit</button>
        </div>
      </div>
    );
  }
}

export default NewsCard;