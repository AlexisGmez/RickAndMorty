import React from 'react'

const LocationInfo = ({ location }) => {

  return (
    <article className='location__info'>
      <h2> {location?.name} </h2>
      <ul className='location__list'>
        <li><span>Type:</span> { location?.type } </li>
        <li><span>Dimension:</span> { location?.dimension } </li>
        <li><span>Popilation:</span> {location?.residents.length} </li>
      </ul>
    </article>
  )
}

export default LocationInfo
