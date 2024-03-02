import './Reviews.css';

function Reviews({ reviewsData }) {
  return (
    <ul className="reviews_container">
      {reviewsData.results.length > 0 ? (
        reviewsData.results.map(review => (
          <li key={review.id}>
            <h3>{review.author_details.name}</h3>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <li className="no-data">There isn't any review.</li>
      )}
    </ul>
  );
}

export default Reviews;
