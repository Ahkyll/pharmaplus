import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function AttendancePage() {
  const [timeIn, setTimeIn] = useState('');
  const [timeOut, setTimeOut] = useState('');
  const [attendanceLog, setAttendanceLog] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleTimeIn = () => {
    const time = new Date().toLocaleTimeString();
    setTimeIn(time);
  };

  const handleTimeOut = () => {
    const time = new Date().toLocaleTimeString();
    setTimeOut(time);
    setAttendanceLog((prevLog) => [
      ...prevLog,
      { timeIn, timeOut: time, date: selectedDate.toLocaleDateString() },
    ]);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setTimeIn('');
    setTimeOut('');
  };

  const filteredLogs = attendanceLog.filter(
    (log) => log.date === selectedDate.toLocaleDateString()
  );

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-xl font-semibold mb-4 text-center sm:text-2xl">Employee Attendance</h1>

      {/* Calendar Section */}
      <div className="mb-6">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="border p-4 rounded-lg shadow-md"
        />
      </div>

      {/* Time In/Out Section */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Employee Attendance</h2>

        {/* Time In and Time Out Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleTimeIn}
            className="bg-green-500 text-white px-4 py-2 rounded-md flex-grow sm:flex-grow-0"
          >
            Time In
          </button>
          <button
            onClick={handleTimeOut}
            className="bg-red-500 text-white px-4 py-2 rounded-md flex-grow sm:flex-grow-0"
          >
            Time Out
          </button>
        </div>

        {/* Display Time In and Time Out */}
        <div className="mt-4 text-sm sm:text-base">
          <p className="text-gray-700">Time In: {timeIn ? timeIn : 'Not Timed In'}</p>
          <p className="text-gray-700">Time Out: {timeOut ? timeOut : 'Not Timed Out'}</p>
        </div>
      </div>

      {/* Attendance Log Section */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          Attendance History for {selectedDate.toLocaleDateString()}
        </h2>
        {filteredLogs.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm sm:text-base">
              <thead className="bg-[#5B6EB7]">
                <tr>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Time In</th>
                  <th className="py-2 px-4 text-left">Time Out</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map((log, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{log.date}</td>
                    <td className="py-2 px-4">{log.timeIn}</td>
                    <td className="py-2 px-4">{log.timeOut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-sm sm:text-base">No attendance history recorded for this day.</p>
        )}
      </div>
    </div>
  );
}

export default AttendancePage;
