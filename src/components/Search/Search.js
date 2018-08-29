import React, { Component } from 'react';
import classes from './Search.css';

class Search extends Component {
    render() { 
        return ( 
            <div className={classes.Search}>
            <input type="text" name="city" value={this.props.city} onChange = {(event) => this.props.onInputCity(event.target.value)}/>
            <input type="text" name="country" value={this.props.country} onChange = {(event) => this.props.onInputCountry(event.target.value)}/>
            <button onClick = {this.props.weather}>Weather</button>
            </div>     
         );
    }
}
 
export default Search;