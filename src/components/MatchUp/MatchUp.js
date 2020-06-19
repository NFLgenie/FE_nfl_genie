import React from 'react';
import './MatchUp.css';

const MatchUp = () => {

  let games = [
    {
      "gameID": "001",
      "away": "HOU",
      "home": "KC",
      "date": "THU-09-10-0820PM-EST",
      "awayOffBye": false,
      "homeOffBye": false
    },
    {
      "gameID": "002",
      "away": "NYJ",
      "home": "BUF",
      "date": "SUN-08-13-0100PM-EST",
      "awayOffBye": false,
      "homeOffBye": false
    },
    {
      "gameID": "003",
      "away": "IND",
      "home": "JAC",
      "date": "THR-08-10-0820PM-EST",
      "awayOffBye": false,
      "homeOffBye": false
    }
  ]

  return(
    <section className='match-up-outer-container'>
      <p className='away-home-text'>away = home</p>
      <hr></hr>
      <div className='games-container'>
        {games.map(game => {
          return (
            <div className='single-match-container'>
              <div className='away-team-box'>
                <div className='team-logo'></div>
                <p className='team-name'>{game.away}</p>
              </div>
              <p>=</p>
              <div className='home-team-box'>
                <p className='team-name'>{game.home}</p>
                <div className='team-logo'></div>
              </div>
            </div>
        )})}
      </div>
    </section>
  )
}

export default MatchUp;
