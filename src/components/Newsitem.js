import React, { Component } from 'react';
import "./Newsitem.css";

export class Newsitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnLabel: this.props.btnName || 'Read More',
    };
  }

  handleMouseEnter = () => {
    this.setState({ btnLabel: "let's go" });
  };

  handleMouseLeave = () => {
    this.setState({ btnLabel: this.props.btnName || 'Read more' });
  };

  render() {
    let { title, description, imgUrl, url } = this.props;
    const defaultImg = 'https://via.placeholder.com/250x200?text=No+Image';

    return (
      <div className="container my-4 d-flex justify-content-center" >
        <div
          className="card border-0 shadow rounded overflow-hidden"
          id="card1"
        >
          <div style={{ overflow: 'hidden', height: '200px' }}>
            <img
              src={imgUrl ? imgUrl : defaultImg}
              className="card-img-top"
              alt="News"
              id="cardimg"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title fw-semibold">
              {title ? title : 'No Title'}...

            </h5>
            <p className="card-text text-muted">
              {description ? description : 'No Description'}...
            </p>
            <a
              href={url?url:'https://www.bbc.com/news/articles/cp34wzql2xvo'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-primary w-100"
              id='btn1'
              onMouseOver={this.handleMouseEnter}
              onMouseOut={this.handleMouseLeave}
            >
              {this.state.btnLabel}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
