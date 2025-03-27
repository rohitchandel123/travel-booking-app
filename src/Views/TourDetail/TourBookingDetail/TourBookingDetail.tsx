import './TourBookingDetail.css';
import { useState, useEffect } from 'react';
import DateTimeComponent from './Shared/DateTimeComponent/DateTimeComponent';

interface tourBookingDetailProps {
  tourPrice: string;
}

function TourBookingDetail({ tourPrice }: tourBookingDetailProps) {         { /* date and time */ }
  const [adultsCount, setAdults] = useState(0);
  const [kidsCount, setKidsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleDecrement(peopleType: string): void {
    if (peopleType == 'Adults') setAdults((count) => count - 1);
    else if (peopleType == 'Kids') setKidsCount((count) => count - 1);
    else if (peopleType == 'Children') setChildrenCount((count) => count - 1);
  }

  function handleIncrement(peopleType: string): void {
    if (peopleType == 'Adults') setAdults((count) => count + 1);
    else if (peopleType == 'Kids') setKidsCount((count) => count + 1);
    else if (peopleType == 'Children') setChildrenCount((count) => count + 1);
  }

  useEffect(() => {
    setTotalPrice(
      Math.ceil(childrenCount + kidsCount + adultsCount) * Number(tourPrice)
    );
    console.log('total peice :', totalPrice);
  }, [childrenCount, kidsCount, adultsCount]);


  return (
    <>
      <h3 className="tour-booking-price-title">
        {tourPrice} <span>/ person</span>
      </h3>
      <div className="tour-booking-input-details">
        
        <div className="">
        <label>Date</label>
        <DateTimeComponent/>
        </div>


        <span></span>
        <div className="booking-people-category">
          <label htmlFor="adult">Adults (18+ years)</label>
          <div className="booking-detail-btn-group">
            <button onClick={() => handleDecrement('Adults')}>-</button>
            <input type="text" value={adultsCount} />
            <button onClick={() => handleIncrement('Adults')}>+</button>
          </div>
        </div>

        <div className="booking-people-category">
          <label htmlFor="kids">Kids (12+ years)</label>
          <div className="booking-detail-btn-group">
            <button onClick={() => handleDecrement('Kids')}>-</button>
            <input type="text" value={kidsCount} />
            <button onClick={() => handleIncrement('Kids')}>+</button>
          </div>
        </div>

        <div className="booking-people-category">
          <label htmlFor="Children">Children (3+ years)</label>
          <div className="booking-detail-btn-group">
            <button onClick={() => handleDecrement('Children')}>-</button>
            <input type="text" value={childrenCount} />
            <button onClick={() => handleIncrement('Children')}>+</button>
          </div>
        </div>
      </div>

      <div className="booking-detail-total">
        <span>Total</span>
        <span className='project-theme-color'>${totalPrice}</span>
      </div>
      <br/>
      <button className='book-now-button'>Book Now</button>
    </>
  );
}
export default TourBookingDetail;
