/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import './Feeds.scss';
import { themeActions, reviewActions } from '../../actions';
import Feeds from './Feeds';
import Filter from './FilterThemes';

function FeedsPage({ getAllThemes, getAllReviews, themes, reviews }) {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [hasMore, setHasMore] = useState(true);

  // using useRef instead of useState to save offset value
  // in order not to re-render compoent every time offset is updated
  const reviewsRef = useRef(null);

  // reviews limit param for each request
  const limit = 20;

  let allReviews = [];
  const themesCount = themes.length;
  const reviewsCount = reviews.length;

  if (!themesCount && !reviewsCount) {
    getAllThemes();
    getAllReviews({ limit, offset: 0, themeId: selectedTheme });
  }

  if (themesCount && reviewsCount) {
    allReviews = reviews.map(
      ({ created_at, comment, themes: reviewThemes }) => ({
        createdAt: created_at,
        comment,
        themes: reviewThemes
          .map(({ theme_id, sentiment }) => ({
            sentiment,
            theme: themes.find(theme => theme.id === theme_id)
          }))
          .filter(theme => !!theme.theme)
        // some of the review themes don't map to a correct theme
        // from themes service, that's why I filter them out here
      })
    );
  }

  const handleThemeChange = event => {
    reviewsRef.current.offset = 0;
    setSelectedTheme(event.target.value);
    setHasMore(true);
    getAllReviews({ limit, offset: 0, themeId: event.target.value });
  };

  async function handleLoadMore() {
    const { current } = reviewsRef;
    current.offset ? (current.offset += limit) : (current.offset = limit);

    // stop infinite scrolling after loading all reviews
    if (reviews.length < current.offset) {
      setHasMore(false);
      return;
    }
    const loadedReviews = await getAllReviews({
      limit,
      offset: current.offset,
      themeId: selectedTheme
    });
    allReviews = loadedReviews;
  }

  return (
    <InfiniteScroll
      pageStart={0}
      initialLoad={false}
      loadMore={handleLoadMore}
      hasMore={hasMore}
    >
      <div className="reviews-page" ref={reviewsRef}>
        <br />
        <div className="filter-bar navbar sticky-top">
          <h2 className="float-left">Customer Reviews</h2>
          <Filter
            selectedTheme={selectedTheme}
            themes={themes}
            handleChange={handleThemeChange}
          />
        </div>
        <Feeds reviews={allReviews} />
        <br />
        {allReviews.length === 0 ? (
          <p>No Reviews found for the selected Theme </p>
        ) : (
          ''
        )}
      </div>
    </InfiniteScroll>
  );
}

function mapState(state) {
  const { themes, reviews } = state;
  return { themes, reviews };
}

const actionCreators = {
  getAllThemes: themeActions.getAll,
  getAllReviews: reviewActions.getAll
};

export default connect(mapState, actionCreators)(FeedsPage);
