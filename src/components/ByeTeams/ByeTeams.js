import React from 'react';
import './ByeTeams.css';

const ByeTeams = () => {

  return (
    <section class='bye-teams-outer-container'>
      <h1 className='title'>Teams on Bye Week</h1>
      <hr></hr>

      <div className='team-record-logo-button'>
      <img src={require(`../../assets/teamLogos/BAL.svg`)} className='team-record-logo'/>
      BAL</div>

    </section>
  )
}

export default ByeTeams;
