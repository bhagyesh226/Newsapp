import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      query: 'general',
    };
    this.searchInput = React.createRef();
  }

  async fetchNews(query, page = 1) {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const url = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=${query}&page=${page}`;
    this.setState({ loading: true });
    try {
      const response = await fetch(url);
      const parsedData = await response.json();
      this.setState({
        articles: parsedData.articles || [],
        loading: false,
        page,
        query,
      });
    } catch (error) {
      console.error("Failed to fetch news:", error);
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.fetchNews(this.state.query);
  }

  handleSearch = (e) => {
    e.preventDefault();
    const query = this.searchInput.current.value.trim() || 'general';
    this.fetchNews(query, 1);
  };

  handlenext = () => {
    this.fetchNews(this.state.query, this.state.page + 1);
  };

  handlegoback = () => {
    if (this.state.page > 1) {
      this.fetchNews(this.state.query, this.state.page - 1);
    }
  };

  render() {
    return (
      <div className='container'>
        <div className="container d-flex justify-content-center">
          <form className="d-flex me-auto" role="search" onSubmit={this.handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              ref={this.searchInput}
            />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>

        <h2 className='text-center'>NEWSapp - Top Headlines</h2>
        {this.state.loading && <p className="text-center">Loading...</p>}

        <div className="row">
          {this.state.articles.slice(0, 9).map((element) => (
            <div className="col-md-4" key={element.url}>
              <Newsitem
                title={element.title ? element.title.slice(0, 60) : ''}
                description={element.description ? element.description.slice(0, 90) : ''}
                imgUrl={element.urlToImage}
                url={element.url}
              />
            </div>
          ))}
        </div>

        <div className="container d-flex justify-content-end p-2 gap-2">
          <button type="button" className="btn btn-secondary" onClick={this.handlegoback} disabled={this.state.page === 1}>
            Go Back
          </button>
          <button type="button" className="btn btn-secondary" onClick={this.handlenext}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
