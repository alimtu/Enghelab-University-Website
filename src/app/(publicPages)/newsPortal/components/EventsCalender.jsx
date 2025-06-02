import Calender from './Calender';
import Events from './Events';

const EventsCalender = () => (
  <>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
      <Calender />
      <Events />
    </div>
    <div className="mt-3 border border-gray-200" />
  </>
);

export default EventsCalender;
