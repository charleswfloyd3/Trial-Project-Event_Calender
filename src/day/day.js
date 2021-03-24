import React, {Fragment, useEffect} from 'react'
import useCalendar from '../hooks/useCalendar'
import './day.css'
import {useDispatch, useSelector} from 'react-redux'


const Day = (props) => {
    const dispatch = useDispatch()
    dispatch({type: "INITIAL_REQUEST"})
    const dataFromApi = useSelector(state => state)
    // console.log(dataFromApi)
    const dateObj = new Date();
    let year = dateObj.getUTCFullYear()
    let month = dateObj.getUTCMonth()
    let date = new Date(year + "-" + month + "-01").getDay();
    let userData = props.userData
    let data = []
    // console.log(userData)

    for(let i = 0; i< 42; i++){
        let dayData = userData[i]
        data.push(dayData)

    }
    const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = useCalendar();
    const months = ["JANUARY", 'FEBRAURY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTMEBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
    const dateClickHandler = date => {
    }

//Handling JSON more efficently. work in progress...
  
  //   let relevantUserData = []
  //   const matchProgramToDateFunc = (date) =>{
  //   for(let i=0; i< userData.length; i++){
  //      if(userData[i].date.slice(8,10) === date.toString() &&  userData[i].date.slice(6,7) === (selectedDate.getMonth() + 1).toString()){
  //         relevantUserData.push(userData[i])
  //         console.log(relevantUserData)

  //       }
  // }
// }
  const matchProgramToDate = (date) => {
      for(let i=0; i< userData.length; i++){
      // console.log(userData[i].date.slice(5,7))
      // console.log(selectedDate.getMonth()+1)
        if(userData[i].date.slice(8,10) === date.toString() &&  userData[i].date.slice(6,7) === (selectedDate.getMonth() + 1).toString()){
          // console.log('it kinda works')
          for(let j=0; userData.length; j++){
          return(
            <ul className="userData">
            {userData[i].events.map(day =>{
              return(
                <li key={day} className="userSchedule">
                  {/* {(() => {if(Object.entries(day).length === 24){
                    return(
                      <div>
                    {Object.entries(day)[3][1]}

                        </div>
                    )
                  }else if (Object.entries(day).length === 23){
                             return(
                      <div>
                    {Object.entries(day)[2][1]}

                        </div>
                    )
                  }})} */}
                  <li className='eventItem'>
                    {Object.entries(day)[3][1]}
                    </li>
                    {/* {console.log(Object.entries(day))}
                    
                    {console.log(Object.entries(day)[3])} */}
                  </li>
 
              )
            })}
            </ul>
          )}
        }
      }
     }
return(
     <Fragment>
      <table className="table">
        <tbody>
          {
            Object.values(calendarRows).map(cols => {
              return <tr key={cols[0].date}>
                {cols.map(col => (
                  col.date === todayFormatted
                    ? <td key={col.date} className="this-month" className="today"onClick={() => dateClickHandler(col.date)}>
                      {matchProgramToDate(col.value)}
                      {col.value}
                    </td>
                    : <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>
                      {matchProgramToDate(col.value)}
                      {col.value}</td>
                ))}
              </tr>
            })
          }
        </tbody>
      </table>
      <i id="leftArrow" className="fas fa-angle-left next" onClick={getPrevMonth}></i>
      <i id="rightArrow" className="fas fa-angle-right next" onClick={getNextMonth}></i>
      <p className="monthAndYear">{months[selectedDate.getMonth()] + " "  + " " + selectedDate.getFullYear()}</p>
    </Fragment>
  );
}
export default Day;
