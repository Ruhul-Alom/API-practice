import React from 'react'

const CountryDetails = (props) => {
    console.log(props.country);
    return (
             <div className="card m-auto" style={{width: '150px'}}>
      <img src={props.country.flags.png} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.country.name.common}</h5>
        <h3 className="card-title">{props.country.name.official}</h3>
        <h2 className="card-title">{props.country.population}</h2>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       
        </div>
      
        </div>
    )
}

export default CountryDetails
