import React from 'react';

import starImage from '../images/icon-star.svg';
import thankYouImage from '../images/illustration-thank-you.svg';

export default function App() {
  const [rating, setRating] = React.useState(-1);
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <main>
      <div className="rating">
        {!submitted && (
          <>
            <span className="rating__icon">
              <img src={starImage} alt="Star Icon" />
            </span>
            <h1 className="rating__heading">How did we do?</h1>
            <p className="rating__text">
              Please let us know how we did with your support request. All feedback is appreciated to help us improve
              our offering!
            </p>
            <div className="rating__numbers">
              {Array.from({ length: 5 }).map((_, index) => {
                const key = `rating_${index}`;
                return (
                  <button
                    type="button"
                    key={key}
                    className={rating === index + 1 ? `rating__number active` : 'rating__number'}
                    onClick={() => setRating(index + 1)}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
            <button type="button" className="btn" onClick={() => setSubmitted(true)}>
              Submit
            </button>
          </>
        )}
        {submitted && (
          <>
            <img className="rating__feedback-img" src={thankYouImage} alt="Card with slip" />
            <p className="rating__feedback">You have selected {rating} out of 5</p>
            <h2 className="rating__feedback-heading">Thank you!</h2>
            <p className="rating__feedback-text">
              We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get
              in touch!
            </p>
          </>
        )}
      </div>
    </main>
  );
}
