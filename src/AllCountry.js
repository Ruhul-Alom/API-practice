import React from 'react'

const AllCountry = (props) => {
  const AddCountry=props.AddCountry;
 
    return (
        <div>
             <div class="card m-auto" style={{width: '500px',marginBottom:'20px'}}>
      <img src={props.country.flags.png} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.country.name.common}</h5>
        <h3 className="card-title">{props.country.name.official}</h3>
        <h2 className="card-title">{props.country.population}</h2>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button className='btn btn-primary'onClick={()=> AddCountry(props.country)}>Click to add</button>
        </div>
      </div>
        </div>
    )
}

export default AllCountry
