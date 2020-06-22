import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from "@material-ui/core";
import "./CountryPicker.module.css"
import { countries, fetchData } from '../../api';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    
    useEffect(() => {    
        const fetchCountries = async () => {
            const initialData = await countries()
            setFetchedCountries(initialData)

        }

        fetchCountries()
    }, []);

    // console.log(fetchedCountries);
    // const countriesName = fetchedCountries.map(({name})=>name)
    // console.log(countriesName);

    return (
        <FormControl className="formControl">
            <NativeSelect defaultValue="" onChange={e=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
               {fetchedCountries.map(({name},i)=><option key={i} value={name}>{name}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
