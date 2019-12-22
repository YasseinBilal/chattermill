import React from 'react';
import './Feeds.scss';

const sentiments = {
  1: {
    className: 'badge-success',
    emojiSrc: 'smile-beam-solid.svg'
  },
  0: {
    className: 'badge-warning',
    emojiSrc: 'meh-solid.svg'
  },
  '-1': {
    className: 'badge-danger',
    emojiSrc: 'sad-tear-solid.svg'
  }
};

function Feeds({ reviews }) {
  return reviews.map(({ createdAt, comment, themes }, reviewIndex) => {
    const creationDate = new Date(createdAt).toISOString().slice(0, 10);

    const reviewThemes = themes.map(({ sentiment, theme }, themeIndex) => {
      return (
        <span
          key={themeIndex}
          className={`theme badge badge-pill ${sentiments[sentiment].className}`}
        >
          {theme.name}
          <img src={sentiments[sentiment].emojiSrc} alt="" />
        </span>
      );
    });

    return (
      <div className="wrapper" key={reviewIndex}>
        <div className="review-wrapper">
          <div className="themes">
            {themes.length > 0 ? <h5 className="themes-title">Themes</h5> : ''}
            {reviewThemes}
          </div>
          {themes.length > 0 ? <br /> : ''}
          <h5 className="customer-review-title">Customer Review</h5>
          <div className="card">
            <div className="card-body">
              <p className="card-text">{comment}</p>
            </div>
          </div>
          <br />
          <div className="review-date">
            <h5 className="customer-review-title">Review Date</h5>
            <p>
              <em>{creationDate}</em>
            </p>
          </div>
        </div>
      </div>
    );
  });
}

export default Feeds;
