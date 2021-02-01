import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import News from '../components/News';
import { fetchNews } from '../redux';

function MarketNewsContainer({ newsData, fetchNews }) {
  useEffect(() => {
    fetchNews();
  }, []);

  // eslint-disable-next-line no-nested-ternary
  return newsData.loading ? (
    <h2 className="text-center pt-5">
      <ScaleLoader size={16} color="green" />
    </h2>
  ) : newsData.error || Object.keys(newsData.news) < 2 ? (
    <h2 className="text-center pt-5">Server is currently not responding</h2>
  ) : (
    <div className="mt-5 d-flex flex-wrap justify-content-center ">
      {newsData.news.map(news => (
        <News
          key={`${news.symbol}-${Math.floor(Math.random() * 11)}`}
          news={news}
        />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  newsData: state.stockNews,
});

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchNews()),
});

MarketNewsContainer.propTypes = {
  newsData: PropTypes.shape({
    news: PropTypes.shape([]),
    loading: PropTypes.bool,
    error: PropTypes.string,
  }),
  fetchNews: PropTypes.func.isRequired,
};

MarketNewsContainer.defaultProps = {
  newsData: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketNewsContainer);
