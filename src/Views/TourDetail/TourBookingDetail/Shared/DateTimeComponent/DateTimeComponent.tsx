import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';
import { useGetDateAndTimeQuery } from '../../../../../Services/Api/module/demoApi';
import { format } from 'date-fns';

function DateTimeComponent() {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState('00:00');

  function handleDateChange(date: any) {
    const formattedDate = selectedDate? format(date, 'yyyy-MM-dd'): 'date error';
     console.log('DATE UPDATED', formattedDate);
    setSelectedDate(date);
  }

  function handleTimeChange(e) {
    setSelectedTime(e.target.value);
    console.log(e.target.value);
  }

  const { slugId } = useParams();
  const slugValue = slugId;
  const { data: res } = useGetDateAndTimeQuery(slugValue, selectedDate);
  console.log('availability data: ', res);


const AvailableTime = res?.data?.map((item) => item.start.slice(11, 16)) || [];

if(AvailableTime)
console.log("available time: ", AvailableTime)


  return (
    <>
      <div>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={new Date()}
          dateFormat="yyyy-MM-dd"
          placeholderText="Choose date"
        />
        <br />
        <br />
        <span>Time</span>
        <br />


        <select value={selectedTime} onChange={handleTimeChange}>
          <option value="choose time" disabled>choose time</option>

         { AvailableTime?.map((timeSlot)=>(
                <option value={timeSlot}> {timeSlot} </option>

            ))}
        </select>


      </div>
      <br />
    </>
  );
}
export default DateTimeComponent;
