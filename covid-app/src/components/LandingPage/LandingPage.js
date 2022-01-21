import axios from 'axios';
import React from 'react';
import {useState, useEffect} from "react"

let URL = "https://api.covidtracking.com/v1/states/ca/current.json"



export default function LandingPage() {
  const [data, setData] = useState([])


  useEffect(() => {
    const fetchData = async () => {

      let response = await axios.get(URL)
      let data = response.data
       console.log(data)
      setData(data)
     
  
    }
  
    fetchData()
  }, [])
 

  return <div>
    <p>{data.state}</p>ls
    
  </div>;
}
