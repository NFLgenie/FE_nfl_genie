import React, { useState } from 'react';
import './MatchUp.css';

const MatchUp = props => {

  const [games, setGames] = useState(props.gameData);

  const onPredictionSelection = (id, winner) => {
    setGames(games.map(game => {
      if (game.gameID === id && game.prediction !== winner) {
        game.prediction = winner
      } else if (game.gameID === id && game.prediction === winner) {
        game.prediction = null
      }
      return game;
    }))
  }

  return(
    <section className='match-up-outer-container'>
      <h1 className='title'>{props.title}</h1>
      <p className='away-home-text'>away</p>
      <p className='away-home-text'>home</p>
      <hr></hr>
      <div className='games-container'>
        {games.map(game => {
          return (
            <div key={game.gameID} className='single-match-container'>
              <button onClick={() => onPredictionSelection(game.gameID, 'Away')} className={game.prediction === 'Away' ? 'away-team-box selected' : 'away-team-box'}>
                <img src={require(`../../assets/teamLogos/${game.away}.svg`)} alt={`${game.away} logo`} className='team-logo'/>{game.away}
              </button>
              <button onClick={() => onPredictionSelection(game.gameID, 'Tie')} className={game.prediction === 'Tie' ? 'tie-button selected' : 'tie-button'}>
              {game.prediction === "Tie" ? 'tie' : 'vs'}
              <p>{game.date.split('-')[0]}</p>
              </button>
              <button onClick={() => onPredictionSelection(game.gameID, 'Home')} className={game.prediction === 'Home' ? 'home-team-box selected' : 'home-team-box'}>
                {game.home}<img src={require(`../../assets/teamLogos/${game.home}.svg`)} alt={`${game.home} logo`} className='team-logo'/>
              </button>
            </div>
        )})}
      </div>
    </section>
  )
}

export default MatchUp;
