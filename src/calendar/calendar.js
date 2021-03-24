import React from 'react'
import Day from '../day/day'
import './calendar.css'
const Calendar = (props) => {

    return (
        <div className="calendar-container">
            <ul className="dayOfWeekHeader">
                <li>M</li>
                <li>T</li>
                <li>W</li>
                <li>T</li>
                <li>F</li>
                <li>S</li>
                <li>S</li>
            </ul>
            <Day userData={props.userData}/>
        </div>
    )
}

export default Calendar;
