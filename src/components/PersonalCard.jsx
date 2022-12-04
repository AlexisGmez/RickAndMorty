import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PersonalCard = ({ urlResident }) => {
  const [ resident, setResident ] = useState();
  
  useEffect(()=>{  
    const getApi = async()=>{
        try {
            const petition = await axios.get(urlResident);
            setResident(petition.data);
        } catch (error) {
            console.error(error);
        }
    }
    getApi();
  },[]); 

  return (
    <article className='character__card'>
      <header>
        <img src={resident?.image} alt="" />
        <div className='status__card'>
            <div className={`circle ${resident?.status}`}></div>
            <span> { resident?.status } </span>
        </div>
      </header>
      <section className='card__list--section'>
        <h2> { resident?.name } </h2>
        <ul className='card__list'>
            <li><span>Specie: </span> { resident?.species } </li>
            <li><span>Origin: </span> { resident?.origin.name } </li>
            <li><span>Episodes where appear: </span> { resident?.episode.length } </li>
        </ul>
      </section>
    </article>
  )
}

export default PersonalCard
