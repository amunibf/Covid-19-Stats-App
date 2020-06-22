import axios from 'axios'
import "core-js/stable";
import "regenerator-runtime/runtime";


const url = 'https://covid19.mathdro.id/api'
export const fetchData = async (country)=>{
    let changeableUrl = url
    if(country){
        changeableUrl = `${url}/countries/${country}`
    }else{
        changeableUrl = url
    }

    try {
        const {data : {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl)
        return {confirmed, recovered, deaths, lastUpdate}
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async()=>{
    try {
        const {data} =  await axios.get(`${url}/daily`)
        console.log(data)
        const saringData = data.map(datum=>({
            confirmed : datum.confirmed.total,
            deaths : datum.deaths.total,
            date : datum.reportDate
        }))        
        // console.log(saringData)
        return(saringData)

    } catch (error) {
        console.log(error);
    }
}

export const countries = async()=>{
    try {
        const {data :{countries}} =  await axios.get(`${url}/countries`)
        // console.log(countries);
        return(countries)

    } catch (error) {
        console.log(error);
    }
}