import React, { Component } from 'react'
//import the components we will need
import NewsCard from './NewsCard'
import NewsManager from '../../modules/NewsManager'

class NewsList extends Component {
    //define what this component needs to render
    state = {
        news: [],
    }

    componentDidMount() {
        console.log("NEWS LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        NewsManager.getAll()
            .then((news) => {
                this.setState({
                    news: news
                })
            })
    }

    render() {
        console.log("NEWS LIST: Render");

        return (
            <div className="container-cards">
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/news/new") }}>
                        Add News Story
  </button>
                </section>
                {this.state.news.map(news =>
                    <NewsCard key={news.id} news={news} deleteNews={this.deleteNews}{...this.props} />)}

            </div>
        )
    }

    deleteNews = id => {
        NewsManager.delete(id)
            .then(() => {
                NewsManager.getAll()
                    .then((newNews) => {
                        this.setState({
                            news: newNews
                        })
                    })
            })
    }
}

export default NewsList