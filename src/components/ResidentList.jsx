import React from 'react'
import PersonalCard from './PersonalCard'

const ResidentList = ( {location} ) => {
  return (
    <section className='grid__characters'>
        {
          location?.residents.map(urlResident =>(
            <PersonalCard key={ urlResident } urlResident= { urlResident } />
          ))
          
        }
        
      </section>
  )
}

export default ResidentList
