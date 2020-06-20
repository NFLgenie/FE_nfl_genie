import React, { useState } from 'react';
import './MatchUp.css';

const MatchUp = () => {

  let gameData = [
    {
      "gameID": "001",
      "away": "HOU",
      "home": "KC",
      "date": "THU-09-10-0820PM-EST",
      "awayOffBye": false,
      "homeOffBye": false,
      "predictAwayWins" : false,
      "predictHomeWins" : false,
      "predictTie" : false
    },
    {
      "gameID": "002",
      "away": "NYJ",
      "home": "BUF",
      "date": "SUN-08-13-0100PM-EST",
      "awayOffBye": false,
      "homeOffBye": false,
      "predictAwayWins" : false,
      "predictHomeWins" : false,
      "predictTie" : false
    },
    {
      "gameID": "003",
      "away": "IND",
      "home": "JAC",
      "date": "THR-08-10-0820PM-EST",
      "awayOffBye": false,
      "homeOffBye": false,
      "predictAwayWins" : false,
      "predictHomeWins" : false,
      "predictTie" : false
    }
  ]
  const [games, setGames] = useState(gameData);

  const onPredictionSelection = (id, awayOrHome) => {
    let target = games.find(game => game.gameID === id)
    setGames(games.reduce((acc, game) => {
      if (game.gameID === target.gameID && awayOrHome === 'Away') {
        game.predictAwayWins = true
        game.predictHomeWins = false
        acc.push(game)
      } else if (game.gameID === target.gameID && awayOrHome === 'Home') {
        game.predictHomeWins = true
        game.predictAwayWins = false
        acc.push(game)
      } else {
        acc.push(game)
      }
      return acc;
    },[]))
  }

  return(
    <section className='match-up-outer-container'>
      <p className='away-home-text'>away = home</p>
      <hr></hr>
      <div className='games-container'>
        {games.map(game => {
          return (
            <div className='single-match-container'>
              <button onClick={() => onPredictionSelection(game.gameID, 'Away')} className={game.predictAwayWins ? 'away-team-box selected' : 'away-team-box'}>
                <div className='team-logo'></div>{game.away}
              </button>
              <p> = </p>
              <button onClick={() => onPredictionSelection(game.gameID, 'Home')} className={game.predictHomeWins ? 'home-team-box selected' : 'home-team-box'}>
                {game.home}<div className='team-logo'></div>
              </button>
            </div>
        )})}
      </div>
    </section>
  )
}

export default MatchUp;
