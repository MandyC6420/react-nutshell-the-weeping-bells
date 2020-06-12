import React, { Component } from "react"
import NewsManager from "../../modules/NewsManager"
import "./NewsForm.css"

class NewsEditForm extends Component {
    //set the initial state
    state = {
        newsTitle: "",
        synopsis: "",
        url: "",
        date: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingNews = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedNews = {
            id: this.props.match.params.newsId,
            title: this.state.newsTitle,
            synopsis: this.state.synopsis,
            url: this.state.url,
            date: this.state.date,


        };

        NewsManager.update(editedNews)
            .then(() => this.props.history.push("/news"))
    }

    componentDidMount() {
        NewsManager.get(this.props.match.params.newsId)
            .then(news => {
                this.setState({
                    title: news.title,
                    synopsis: news.synopsis,
                    url: news.url,
                    date: news.date,
                    loadingStatus: false,
                });
            });
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="newsTitle"
                                value={this.state.title}
                            />
                            <label htmlFor="newsTitle">News Title</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="synopsis"
                                value={this.state.synopsis}
                            />
                            <label htmlFor="synopsis">Synopsis</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="url"
                                value={this.state.url}
                            />
                            <label htmlFor="url">URL</label>
                            <input
                                type="date"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="date"
                                value={this.state.date}
                            />
                            <label htmlFor="date">Date</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingNews}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default NewsEditForm