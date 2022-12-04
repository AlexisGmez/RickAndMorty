import axios from 'axios';
import React, { useEffect, useState } from 'react'

const LocationFilter = ( { locationName,getNewLocation,setLocationName } ) => {
  
  const [locationOptions, setLocationOptions] = useState();
  
  useEffect(()=>{

    if (!locationName) return setLocationOptions();
    const URL = `https://rickandmortyapi.com/api/location?name=${locationName}`;
    
    const getApi = async() =>{
        try {
            const petition = await axios.get(URL);
            setLocationOptions( petition.data.results );

        } catch (error) {
            setLocationName('');
        }
    }
    getApi();
  },[locationName]);

  


  return (
    <ul className='searchOptions'>
      {
        locationOptions?.map(locationOption =>(
            <li 
                key={locationOption.url}
                onClick={()=>getNewLocation(locationOption)}    
            > { locationOption.name } </li>
        ))
      }
    </ul>
  )
}

export default LocationFilter
