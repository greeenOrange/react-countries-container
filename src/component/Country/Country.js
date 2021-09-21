import React from 'react';
import './Country.css'
const Country = (props) => {
    const {flag, name, population, capital} =props.country
    console.log(props.country);
    const countryIp={
color: 'green'
    }
    return (       
            <div style={{backgroundColor:'rgb(231, 188, 130)',border:'2px solid gray', borderRadius:'10px', }}>
            <img className='county-img' src={flag} alt="" />
            <h3>Country: <span style={countryIp}>{name}</span></h3>
            <p>Capital: <span className='county-ip' style={{color: '#ed65d6'}}>{capital}</span></p>
            <p>Population: <span className='county-ip' style={{color:'#3c5fea'}}>{population}</span></p>
        </div>
        
    );
};

export default Country;