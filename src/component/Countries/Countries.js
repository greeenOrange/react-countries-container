import { logDOM } from '@testing-library/dom';
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
    return (
        <div>
           <h2>Total Countries: {countries.length}</h2>
           <div  className="country-coloumn">
           {
             countries.map(country => <Country
             key={country.alpha3Code}
             country={country}
             ></Country>)
           }
           </div>
        </div>
    );
};

export default Countries;