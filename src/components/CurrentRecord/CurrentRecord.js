import React from 'react';
import './CurrentRecord.css';

const CurrentRecord = props => {

  return(
    <section className='current-record-outer-container'>
      <div className='label-container'>
        <p className='rank-label'>rank</p>
        <p className='rank-label'>{props.title}</p>
        <p className='WLT-label'>w-l-t</p>
        <p className='conf-label'>conf</p>
      </div>
      <hr></hr>
      <div className='current-record-container'>

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

        <div className='singe-record-container'>
          <p className='rank-text'>4</p>
          <button className='team-record-logo-button'>
          <img src={require(`../../assets/teamLogos/CIN.svg`)} className='team-record-logo'/>
          CIN</button>
          <p className='WLT-text'>2-5-0</p>
          <p className='WLT-text'>1-1-0</p>
        </div>

        <div className='singe-record-container'>
          <p className='rank-text'>5</p>
          <button className='team-record-logo-button'>
          <img src={require(`../../assets/teamLogos/HOU.svg`)} className='team-record-logo'/>
          HOU</button>
          <p className='WLT-text'>1-2-0</p>
          <p className='WLT-text'>2-2-0</p>
        </div>

        <div className='singe-record-container'>
          <p className='rank-text'>6</p>
          <button className='team-record-logo-button'>
          <img src={require(`../../assets/teamLogos/IND.svg`)} className='team-record-logo'/>
          IND</button>
          <p className='WLT-text'>3-2-0</p>
          <p className='WLT-text'>1-0-1</p>
        </div>

        <div className='singe-record-container'>
          <p className='rank-text'>7</p>
          <button className='team-record-logo-button'>
          <img src={require(`../../assets/teamLogos/CHI.svg`)} className='team-record-logo'/>
          CHI</button>
          <p className='WLT-text'>1-5-0</p>
          <p className='WLT-text'>1-2-0</p>
        </div>

        <div className='singe-record-container'>
          <p className='rank-text'>8</p>
          <button className='team-record-logo-button'>
          <img src={require(`../../assets/teamLogos/BAL.svg`)} className='team-record-logo'/>
          BAL</button>
          <p className='WLT-text'>1-2-0</p>
          <p className='WLT-text'>2-2-0</p>
        </div>

        <div className='singe-record-container'>
          <p className='rank-text'>9</p>
          <button className='team-record-logo-button'>
          <img src={require(`../../assets/teamLogos/BUF.svg`)} className='team-record-logo'/>
          BUF</button>
          <p className='WLT-text'>3-4-0</p>
          <p className='WLT-text'>3-1-1</p>
        </div>

        <div className='singe-record-container'>
          <p className='rank-text'>10</p>
          <button className='team-record-logo-button'>
          <img src={require(`../../assets/teamLogos/CIN.svg`)} className='team-record-logo'/>
          CIN</button>
          <p className='WLT-text'>2-5-0</p>
          <p className='WLT-text'>1-1-0</p>
        </div>

        <div className='singe-record-container'>
          <p className='rank-text'>11</p>
          <button className='team-record-logo-button'>
          <img src={require(`../../assets/teamLogos/HOU.svg`)} className='team-record-logo'/>
          HOU</button>
          <p className='WLT-text'>1-2-0</p>
          <p className='WLT-text'>2-2-0</p>
        </div>

        <div className='singe-record-container'>
          <p className='rank-text'>12</p>
          <button className='team-record-logo-button'>
          <img src={require(`../../assets/teamLogos/IND.svg`)} className='team-record-logo'/>
          IND</button>
          <p className='WLT-text'>3-2-0</p>
          <p className='WLT-text'>1-0-1</p>
        </div>

        <div className='singe-record-container'>
          <p className='rank-text'>13</p>
          <button className='team-record-logo-button'>
          <img src={require(`../../assets/teamLogos/CHI.svg`)} className='team-record-logo'/>
          CHI</button>
          <p className='WLT-text'>1-5-0</p>
          <p className='WLT-text'>1-2-0</p>
        </div>

        <div className='singe-record-container'>
          <p className='rank-text'>14</p>
          <button className='team-record-logo-button'>
          <img src={require(`../../assets/teamLogos/BAL.svg`)} className='team-record-logo'/>
          BAL</button>
          <p className='WLT-text'>1-2-0</p>
          <p className='WLT-text'>2-2-0</p>
        </div>

        <div className='singe-record-container'>
          <p className='rank-text'>15</p>
          <button className='team-record-logo-button'>
          <img src={require(`../../assets/teamLogos/BUF.svg`)} className='team-record-logo'/>
          BUF</button>
          <p className='WLT-text'>3-4-0</p>
          <p className='WLT-text'>3-1-1</p>
        </div>

        <div className='singe-record-container'>
          <p className='rank-text'>16</p>
          <button className='team-record-logo-button'>
          <img src={require(`../../assets/teamLogos/CIN.svg`)} className='team-record-logo'/>
          CIN</button>
          <p className='WLT-text'>2-5-0</p>
          <p className='WLT-text'>1-1-0</p>
        </div>

      </div>
    </section>
  )
}

export default CurrentRecord;
