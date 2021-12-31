
import './App.css';
import {useEffect,useState} from 'react'
import AllCountry from './AllCountry';
import CountryDetails from './CountryDetails';


function App() {
  const [country,setCountry]=useState([])
const [countries,setCountries]=useState([])


useEffect(()=>{
fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data=>{
  setCountries(data) 
}
  )
},[])

const AddCountry=(countryInfo)=>{
  setCountry(countryInfo)
}
  
  return (
    <div className="App">
      {/* <h1>{countries.length}</h1> */}
      <div className="row">
        <div className="col-md-4" style={{marginRight:'100px'}}>
     {countries.map(country=><AllCountry  country={country}  AddCountry={AddCountry}/>
      )}
      </div>
      <div className="col-md-7">
    { country.length>0 || <CountryDetails country={country}/> }
    {/* <CountryDetails/> */}
      </div>
    </div>
    </div>
  );
}

export default App;
