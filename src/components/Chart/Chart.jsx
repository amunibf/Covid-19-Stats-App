import React, { useState, useEffect } from 'react'
import { fetchDailyData, fetchData } from "../../api/index";
import { Line, Bar } from "react-chartjs-2";
import "core-js/stable";
import "regenerator-runtime/runtime";

const Chart = ({data : {confirmed, deaths, recovered}, country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchMyAPI =async() =>{
          const initialDailyData = await fetchDailyData();
        //   console.log(initialDailyData);
          setDailyData(initialDailyData);
        };

        fetchMyAPI();

     }, []);

    console.log(dailyData);
    // console.log(dailyData.map(({confirmed})=>confirmed));
    // console.log(dailyData.map(({deaths})=>deaths));
    // console.log(dailyData.map(({date})=>date));
  
    const data2 = {
        labels: dailyData.map(({date})=>date),
        datasets: [
          {
            label: "Infected",
            data: dailyData.map(({confirmed})=>confirmed),
            fill: false,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Deaths",
            data: dailyData.map(({deaths})=>deaths),
            fill: false,
            backgroundColor : 'rgba(255,0,0,0,5)',
            borderColor: "#742774"
          }
        ]
      };

    const lineChart = (
        dailyData.length ? (<Line
            data={data2}
            // data={{
            //     labels : dailyData.map(({date})=>date),
            //     dataSheets : [{
            //         data :  dailyData.map(({confirmed})=>confirmed),
            //         label : " ",
            //         borderColor : "#8e5ea2",
            //         fill : false
            //     },{
            //         data :  dailyData.map(({deaths})=>deaths),
            //         label : 'Deaths',
            //         borderColor : 'red',
            //         backgroundColor : 'rgba(255,0,0,0,5)',
            //         fill : false
            //     }]
            // }}
        />):null
    )

    const barChart = (
        confirmed ?(<Bar
        data = {{
            labels : ['Infected','Recovered','Deaths'],
            datasets : [{
            label : 'People',
            backgroundColor :
            ['rgba(0, 0, 255, 0.5)',
            'rgba(0, 255, 0, 0.5)',
            'rgba(255, 0, 0, 0.5)'],
            data : [confirmed.value, recovered.value, deaths.value]
            
            }],
        }}
        options ={{
            legend : { display : false },
            title : {display : true, text : `Current state in ${country}`}
        }}
        />):null
    )

    

    return (
        <div className="container">
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart
