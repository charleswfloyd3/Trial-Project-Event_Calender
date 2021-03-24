import React, {Fragment} from 'react'
import './calendarNav.css'
import useCalendar from '../hooks/useCalendar'
import {useDispatch, useSelector} from 'react-redux'

const CalendarNav = () => {
    const dispatch = useDispatch() 
    const dataFromApi = useSelector(state => state)
    const reduxTst = () =>{
        dispatch({type: "INITIAL_REQ"})
    console.log(dataFromApi)
    }
    const months = ["JANUARY", 'FEBRAURY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTMEBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
    const {getPrevMonth, getNextMonth, selectedDate} = useCalendar()
    return (
        <div className="calendarNav">
            <img src="images/monthIcon.jfif" className="monthIcon"></img>
            <div className="eventBtns">
                <button className="newBtn" onClick={reduxTst}>+ NEW</button>
                <button className="moreBtn"> MORE</button>
            </div>
        </div>
    )
}

export default CalendarNav;
