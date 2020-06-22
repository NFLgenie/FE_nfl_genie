import React from 'react';
import './CurrentRecord.css';

const CurrentRecord = () => {

  return(
    <section className='current-record-outer-container'>
      <h1 className='title'>AFC</h1>
      <p className='heading-labels'>rank</p>
      <p className='heading-labels'>w-l-t</p>
      <p className='heading-labels'>conf</p>
      <hr></hr>

      <div className='singe-record-container'>
      <button className='team-record-logo-button'>
      <img src={require(`../../assets/teamLogos/CHI.svg`)} className='team-record-logo'/>
      CHI</button>
      
    </section>
  )
}

export default CurrentRecord;
