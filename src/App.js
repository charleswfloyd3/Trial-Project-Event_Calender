import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import EventCalendar from './eventCalendar/eventCalendar';
import {useDispatch, useSelector} from 'react-redux'

function App() {

    const dispatch = useDispatch() 
    const dataFromApi = useSelector(state => state)


  const [userData, setuserData] = useState("")
  
  const params = new URLSearchParams()
  params.append('email', 'hamzah@fitsw.com')
  params.append('mobile', '1')
  params.append('password', 'abc123')
  params.append('action', 'getEventsInRange')
  params.append('event_type', "all")
  params.append('client_id', "205762")
  params.append('start_date', "2021-03-22")
  params.append('offset', "0")
  params.append('limit', "30")

  const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  }
  const api = "?email=hazmah@fitsw.com&mobile=1&password=abc123&action=getEventsInRange&event_type=all&client_id=205762&start_date=2021-03-22&offset=0&limit=30" 
  useEffect(() =>{

  axios.post(api, params, config).then(response =>{
    //  console.log(response.data.data)
     setuserData(response.data.data)
     dispatch({type: "INITIAL_REQ"})
     console.log(dataFromApi)
   })
   
  }, [])

  return (
    <div className="App">
      <EventCalendar userData={userData} />
    </div>
  );
}

export default App;
