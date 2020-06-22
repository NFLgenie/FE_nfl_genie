import React from 'react';
import './CurrentRecord.css';

const CurrentRecord = () => {

  return(
    <section className='current-record-outer-container'>
      <h1 className='title'>AFC</h1>
      <div className='label-container'>
        <p className='rank-label'>rank</p>
        <p className='WLT-label'>w-l-t</p>
        <p className='conf-label'>conf</p>
      </div>
      <hr></hr>

      <div className='singe-record-container'>
        <p className='rank-text'>1</p>
        <button className='team-record-logo-button'>
        <img src={require(`../../assets/teamLogos/CHI.svg`)} className='team-record-logo'/>
        CHI</button>
        <p className='WLT-text'>1-5-0</p>
        <p className='WLT-text'>1-2-0</p>
      </div>

      <div className='singe-record-container'>
        <p className='rank-text'>2</p>
        <button className='team-record-logo-button'>
        <img src={require(`../../assets/teamLogos/BAL.svg`)} className='team-record-logo'/>
        BAL</button>
        <p className='WLT-text'>1-2-0</p>
        <p className='WLT-text'>2-2-0</p>
      </div>

      <div className='singe-record-container'>
        <p className='rank-text'>3</p>
        <button className='team-record-logo-button'>
        <img src={require(`../../assets/teamLogos/BUF.svg`)} className='team-record-logo'/>
        BUF</button>
        <p className='WLT-text'>3-4-0</p>
        <p className='WLT-text'>3-1-1</p>
      </div>

    </section>
  )
}

export default CurrentRecord;
