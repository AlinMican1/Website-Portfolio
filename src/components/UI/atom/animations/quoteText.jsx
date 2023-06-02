import React from 'react';
import './quoteText.css';
import PropTypes from 'prop-types';

export const QuoteText = ({quote , author}) => {
    return (
        <main className="wrapper">
            <section className="effect effect-c">
                <h1 className="effect__heading">
                        {quote}{" "}
                </h1>
            <h2 className="effect__subheading">{author}</h2>
            </section>
        </main>
  )
};
QuoteText.propTypes = {
    quote: PropTypes.string,
    author: PropTypes.string
  };
  
  QuoteText.defaultProps = {
    quote: "Quote",
    author: "Author"
  };
  
  
  export default QuoteText;