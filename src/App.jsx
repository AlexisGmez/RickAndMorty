import axios from 'axios';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import './App.css'
import LocationFilter from './components/LocationFilter';
import LocationInfo from './components/LocationInfo';
import ResidentList from './components/ResidentList';
import { getRandomNumber } from './utils/getRandomNumber'
import PortalImg from './assets/Portal.png';
function App() {

  const [location, setLocation] = useState();
  const[ locationName, setLocationName] = useState('');

  const getDataDimension =(idDimension)=>{

    const getData = async()=>{
      try {
        const petition = await axios.get(idDimension);
        setLocation(petition.data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Not Found Dimension',
          timer: 1500,
        })
      }
    }
    getData();
  }

  useEffect(()=>{
    const randomDimension = getRandomNumber();
    const URL = `https://rickandmortyapi.com/api/location/${randomDimension}`;
    getDataDimension(URL);
  },[]);

  const handleSubmit =(e)=>{
    e.preventDefault();
    const dimensionSeach = e.target.searchValue.value;

    if (!dimensionSeach) return

    try {
      const URL = `https://rickandmortyapi.com/api/location/${dimensionSeach}`;
      getDataDimension(URL);
      document.getElementById('myForm').reset();
      setLocationName('');
    } catch (error) {
      console.error(error)
    }
    
  }

  const handleChangeInput = ( { target } ) =>{
    setLocationName(target.value);
  }

  const getNewLocation = async(URL) =>{
    
    try {
        const petition = await axios.get(URL.url);
        setLocation(petition.data);
        document.getElementById('myForm').reset();
        setLocationName('');

    } catch (error) {
        console.error(error);
    }
  }

  return (
    <div className="App">

      <form 
        onSubmit={ handleSubmit }
        className='App__form' 
        id='myForm'
      >
        <input 
          type="text"
          placeholder='Search a dimension'
          id='searchValue'
          onChange={ handleChangeInput} 
        />
      </form>

      <LocationFilter 
        locationName={ locationName } 
        getNewLocation={ getNewLocation}
        setLocationName={setLocationName}
      />

      <LocationInfo location={location} />

      {
        location ? <ResidentList 
                      location={ location }
                    />
                : <div className='loading'>
                    <img src={ PortalImg } alt="" />
                    <h1>Loading...</h1>
                  </div>
      }

    </div>
  )
}

export default App
