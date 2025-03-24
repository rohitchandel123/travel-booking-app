import './TourCard.css';

interface tourCardProps {
  cityName: string;
  countryName: string;
  tourName: string;
  tourImage: string;
  tourRating: string; //Number;
  tourReview: string; //Number;
  tourPrice: string; //Number;
  tourDuration: string; //Number;
}

function TourCard({
  cityName,
  countryName,
  tourName,
  tourImage,
  tourRating,
  tourReview,
  tourPrice,
  tourDuration,
}: tourCardProps) {
  return (
    <div className="tour-card-container">
      <div className="tour-image-container">
        <img src={tourImage} />
      </div>
      <div className="tour-info-container">
        <p>
          {cityName}, {countryName}
        </p>
        <h4>{tourName}</h4>

        <div className="tour-additional-info">
          <div className="rating-reviews">
            <span className="rating-star-class">
              <i className="fa fa-star" /> {tourRating} <br />{' '}
            </span>
            <span className="tour-additional-info-text">
              {tourReview} reviews <br />
            </span>
          </div>
          <span className="tour-additional-info-text">
            {tourDuration}
            <br />{' '}
          </span>
        </div>

        <div className="tour-price">
          <p>Starting From</p>
          <span className="tour-price-text">
            ${tourPrice}
            <br />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
