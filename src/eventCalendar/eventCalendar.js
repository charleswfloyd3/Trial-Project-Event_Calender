import Calendar from "../calendar/calendar"
import CalendarNav from "../calendarNav/calendarNav"
import "./eventCalendar.css"
const EventCalendar = (props) => {
    return (
        <div className="eventCalendar-container">
            <CalendarNav />
            <Calendar userData={props.userData} />
        </div>
    )
}

export default EventCalendar;
