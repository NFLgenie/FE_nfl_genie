import React from 'react';
import './ByeTeams.css';

const ByeTeams = () => {

  return (
    <section class='bye-teams-outer-container'>
      <h1 className='title'>Teams on Bye Week</h1>
      <hr></hr>

      <div className='bye-team-logo'>
      <img src={require(`../../assets/teamLogos/BAL.svg`)} className='team-record-logo'/>
      BAL</div>

      <div className='bye-team-logo'>
      <img src={require(`../../assets/teamLogos/CIN.svg`)} className='team-record-logo'/>
      CIN</div>

    </section>
  )
}

export default ByeTeams;
