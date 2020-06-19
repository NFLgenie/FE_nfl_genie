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
      {
        games.map(game => {
          return (
            <div className='game-box'>
              <div className='team-logo'></div>
              <p className='team'>{game.away}</p>
              <p className='team'>{game.home}</p>
            </div>
          )
        })
      }
    </section>
  )
}

export default MatchUp;
