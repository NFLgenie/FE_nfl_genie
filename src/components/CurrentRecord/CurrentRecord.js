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
        <p className='rank-label'>1</p>
        <button className='team-record-logo-button'>
        <img src={require(`../../assets/teamLogos/CHI.svg`)} className='team-record-logo'/>
        CHI</button>
        <p className='WLT-labels'>1-5-0</p>
        <p className='WLT-labels'>1-2-0</p>
      </div>

      <div className='singe-record-container'>
        <p className='rank-label'>2</p>
        <button className='team-record-logo-button'>
        <img src={require(`../../assets/teamLogos/BAL.svg`)} className='team-record-logo'/>
        CHI</button>
        <p className='WLT-labels'>1-2-0</p>
        <p className='WLT-labels'>2-2-0</p>
      </div>

      <div className='singe-record-container'>
        <p className='rank-label'>3</p>
        <button className='team-record-logo-button'>
        <img src={require(`../../assets/teamLogos/BUF.svg`)} className='team-record-logo'/>
        CHI</button>
        <p className='WLT-labels'>3-4-0</p>
        <p className='WLT-labels'>3-1-1</p>
      </div>

    </section>
  )
}

export default CurrentRecord;
