import React, { Component } from 'react';
import NewsManager from '../../modules/NewsManager';


class NewsForm extends Component {
    state = {
        newsTitle: "",
        synopsis: "",
        url: "",
        date:"",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    
    constructNewNews = evt => {
        evt.preventDefault();
        if (this.state.newsTitle === "" || this.state.synopsis === "" || this.state.url === "" || this.state.date === "") {
            window.alert("Please input News Title, synopsis, url and date");
        } else {
            this.setState({ loadingStatus: true });
            const news = {
                title: this.state.newsTitle,
                synopsis: this.state.synopsis,
                url: this.state.url,
                date: this.state.date
            };

            
            NewsManager.post(news)
            .then(() => this.props.history.push("/news"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="newsTitle"
                        placeholder="News Title"
                        />
                        <label htmlFor="newsTitle">Title</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="synopsis"
                        placeholder="Synopsis"
                        />
                        <label htmlFor="synopsis">Synopsis</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="url"
                        placeholder="URL"
                        />
                        <label htmlFor="url">URL</label>
                        <input
                        type="date"
                        required
                        onChange={this.handleFieldChange}
                        id="date"
                        placeholder="Date"
                        />
                        <label htmlFor="date">Date</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewNews}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default NewsForm