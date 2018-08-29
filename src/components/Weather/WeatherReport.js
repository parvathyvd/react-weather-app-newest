import React from 'react';
import classes from './WeatherReport.css';


const weatherReport = (props) => {
    return ( <div className={classes.WeatherReport}>
        <h3>City <span>{props.city}</span></h3>
        <h3>Country <span>{props.country}</span></h3>
        <h3>Weather <span>{props.description}</span></h3>
        <h3>Humidity <span>{props.humidity}</span></h3>

    </div> );
}
 
export default weatherReport;