import axios from 'axios'
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



const inititalState = 0

//reducers
export const rootReducer = (state = inititalState, action) =>{

    switch(action.type){
        case "INITIAL_REQ":

            return state + 5
        default:
          return state;
    }

};
//actions
const initialReq  = {
  type: 'INITIAL_REQ',
  
}












   