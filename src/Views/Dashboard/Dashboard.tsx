import './Dashboard.css';
import Prompt from '../../Components/Atom/Blocker';
import { useGetAttractionQuery } from '../../Services/Api/module/demoApi';

import { ProjectImages } from '../../assets/ProjectImages';
import TourCard from '../TourCard/TourCard';
import HomepageDestination from '../HomepageDestination/HomepageDestination';
import WhyUsComponent from '../WhyUsComponent/index';

export default function Dashboard() {
  //manages the id of the cities as per your requirements
  const { data, error } = useGetAttractionQuery(
    'eyJwaW5uZWRQcm9kdWN0IjoiUFJpSEhIVjB1TGJPIiwidWZpIjoyMDA4ODMyNX0='
  );

  const attractions = data?.data?.products?.slice(10, 14) || []; //?.primaryPhoto?.small;

  console.log('working......', attractions);
  console.log(data, error);

  return (
    <div>
      <Prompt when message="Are you sure you want to leave?" />
      <h2>working homepage</h2>

      <div className="homepage-banner">
        <img src={ProjectImages.HomePageBanner} />
        <div className="banner-text-container">
          <div className="banner-text-content">
            <h3 className="kaushan-text">Save 15% off in Worldwide</h3>
            <h1>Travel & Adventures</h1>
            <p>Find awesome hotel, tour, car and activities in London</p>
          </div>
        </div>
      </div>

      <div className="search-container">
        <div className="search-container-elements">search elements</div>
      </div>

      <div className="tour-container">
        <div className="section-headers">
          <h4 className="kaushan-text cursive-normal">Tours</h4>
          <h2 className="section-heading">Most Popular Tours</h2>
        </div>
        <div className="tour-content-container">
          <div className="tour-content">
            {/* country name, city name, tour name, ratings, reviews, price , duration  */}

            {attractions.map((item) => {
              const countryName = item?.ufiDetails?.url?.country;
              const cityName = item?.ufiDetails?.bCityName;
              const tourName = item?.name;
              const tourImage = item?.primaryPhoto?.small;
              const tourRating =
                item?.reviewsStats?.combinedNumericStats?.average; //issue
              const tourReview = item?.reviewsStats?.allReviewsCount; //issue
              const tourPrice = Math.floor(item?.representativePrice?.chargeAmount);

              return (
                <TourCard
                  cityName={cityName}
                  countryName={countryName}
                  tourName={tourName}
                  tourImage={tourImage}
                  tourRating={tourRating}
                  tourReview={tourReview}
                  tourPrice={tourPrice}
                  tourDuration="7 days"
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* destination section  */}
      <HomepageDestination />

      {/* why us section */}
      <WhyUsComponent />
    </div>
  );
}
