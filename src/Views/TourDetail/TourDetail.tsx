import './TourDetail.css';
import { useLocation } from 'react-router-dom';
import { useGetTourDetailQuery } from '../../Services/Api/module/demoApi';
import FeaturedTours from '../FeaturedTours/FeaturedTours';

function TourDetail() {
  const location = useLocation();
  const { slugValue } = location.state;

  const { data } = useGetTourDetailQuery(slugValue);
  const tourData = data?.data;

  const tourName = tourData?.name;
  const tourCity = tourData?.ufiDetails?.bCityName;
  const tourCountry = tourData?.ufiDetails?.url?.country;
  const tourRating = tourData?.reviewsStats?.combinedNumericStats?.average;
  const tourReviewCount = tourData?.reviewsStats?.combinedNumericStats?.total;
  const tourPrice = tourData?.representativePrice?.chargeAmount;
  const tourDescription = tourData?.description;

  const tourAllImages = tourData?.photos;

  const tourImageItem = tourAllImages?.find((item: any) => item?.isPrimary);
  const tourImage = tourImageItem?.medium || tourImageItem?.small;

  return (
    <>
      <section className="tour-detail-section">
        <div className="tour-detail-container">
          <div className="tour-detail-image-container">
            <img className="tour-image" src={tourImage} />
          </div>

          <div className="tour-detail-video-gallery-div">
            <button className="video-gallery-btn">
              Video <i className="fa-solid fa-video" />
            </button>
            <button className="video-gallery-btn">
              Gallery <i className="fa-regular fa-image" />
            </button>
          </div>

          <div className="tour-detail-content">
            <p>
              {' '}
              <i className="fa-solid fa-location-dot"></i> {tourCity},{' '}
              {tourCountry}
            </p>
            <h3>{tourName}</h3>
          </div>

          <div className="tour-features-container">
            <div className="tour-feature">
              <span className="tour-feature-heading">From</span>
              <span className="tour-feature-value">${tourPrice}</span>
            </div>

            <div className="tour-feature">
              <span className="tour-feature-heading">Duration</span>
              <span className="tour-feature-value">1 day</span>
            </div>

            <div className="tour-feature">
              <span className="tour-feature-heading">Max People</span>
              <span className="tour-feature-value">10</span>
            </div>

            <div className="tour-feature">
              <span className="tour-feature-heading">Min Age</span>
              <span className="tour-feature-value">5</span>
            </div>

            <div className="tour-feature">
              <span className="tour-feature-heading">Tour Type</span>
              <span className="tour-feature-value">Adventure</span>
            </div>

            <div className="tour-feature">
              <span className="tour-feature-heading">Reviews</span>
              <span className="tour-feature-value">
                {tourRating} ({tourReviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="tour-detail-overview">
            <h5>Overview</h5>
            <p> {tourDescription} </p>
          </div>
        </div>

        <div className="tour-booking-detail"></div>
      </section>

      <div className="tour-detail-featured-tours">
        {/* some tours will be featured here*/}
        <FeaturedTours />
      </div>
    </>
  );
}

export default TourDetail;
