import { useState } from "react"
import axios from 'axios'

function Getdata() {
    const [data, setData] = useState('')
    const getData = async () => {
        try {
          const response = await axios.get('https://vkyc-api-uat.mufinpay.com/reports/meet/', {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBtdWZpbnBheS5jb20iLCJleHAiOjE3MjYxNjkyNzQsImlhdCI6MTcyNjEzMzI3NH0.6QNwlxsoH0NGgMO40gZGow-wu7hrSvJIgRWi37AMelM',
            },
          });
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      

  return (
    <div>
      <button onClick={getData}>Get</button>
      {
        data &&( <div>{data}</div>)
      }
    </div>
  )
}

export default Getdata
