'use client';
import '@react-shamsi/calendar/dist/styles.css';

import { Calendar } from '@react-shamsi/calendar';

const CalenderComponent = () => (
  <div className="flex items-center justify-center w-full bg-gray-100" key={'123calneder123'}>
    <Calendar className="!max-w-[800px]" key={'123calneder'} />
  </div>
);

export default CalenderComponent;
