import React, { useState } from 'react';
import './MatchUp.css';

const MatchUp = props => {

  const [games, setGames] = useState(props.gameData);

  const onPredictionSelection = (id, winner) => {
    let target = games.find(game => game.gameID === id)
    setGames(games.reduce((acc, game) => {
      if (game.gameID === target.gameID && winner === 'Away') {
        game.predictAwayWins = true
        game.predictHomeWins = false
        game.predictTie = false
        acc.push(game);
      } else if (game.gameID === target.gameID && winner === 'Home') {
        game.predictHomeWins = true
        game.predictAwayWins = false
        game.predictTie = false
        acc.push(game);
      } else if (game.gameID === target.gameID && winner === 'Tie') {
        game.predictTie = true
        game.predictHomeWins = false
        game.predictAwayWins = false
        acc.push(game);
      } else {
        acc.push(game);
      }
      return acc;
    },[]))
  }

  return(
    <section className='match-up-outer-container'>
      <h1>{props.title}</h1>
      <p className='away-home-text'>away = home</p>
      <hr></hr>
      <div className='games-container'>
        {games.map(game => {
          return (
            <div key={game.gameID} className='single-match-container'>
              <button onClick={() => onPredictionSelection(game.gameID, 'Away')} className={game.predictAwayWins ? 'away-team-box selected' : 'away-team-box'}>
                <div className='team-logo'></div>{game.away}
              </button>
              <button onClick={() => onPredictionSelection(game.gameID, 'Tie')} className={game.predictTie ? 'tie-button selected' : 'tie-button'}>=</button>
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
