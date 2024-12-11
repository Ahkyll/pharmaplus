import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-4 shadow-md rounded-lg flex flex-col justify-center items-center w-full max-w-md">
        <ReactCalendar onChange={setDate} value={date} className="w-full h-full" />
        <p className="mt-4 text-gray-600">
          Selected date: <span className="font-semibold">{date.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}

export default Calendar;
