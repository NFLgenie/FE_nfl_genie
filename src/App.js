import React from 'react';
import NavHeader from './components/NavHeader/NavHeader';
import MatchUp from './components/MatchUp/MatchUp';
import './App.css';

const App = () => {

  let gameDataAFC = [
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
      },
      {
        "gameID": "004",
        "away": "MIA",
        "home": "NE",
        "date": "THR-08-10-0820PM-EST",
        "awayOffBye": false,
        "homeOffBye": false,
        "predictAwayWins" : false,
        "predictHomeWins" : false,
        "predictTie" : false
      },
      {
        "gameID": "005",
        "away": "CLE",
        "home": "BAL",
        "date": "THR-08-10-0820PM-EST",
        "awayOffBye": false,
        "homeOffBye": false,
        "predictAwayWins" : false,
        "predictHomeWins" : false,
        "predictTie" : false
      },
      {
        "gameID": "006",
        "away": "LAC",
        "home": "CIN",
        "date": "THR-08-10-0820PM-EST",
        "awayOffBye": false,
        "homeOffBye": false,
        "predictAwayWins" : false,
        "predictHomeWins" : false,
        "predictTie" : false
      },
      {
        "gameID": "007",
        "away": "TEN",
        "home": "DEN",
        "date": "THR-08-10-0820PM-EST",
        "awayOffBye": false,
        "homeOffBye": false,
        "predictAwayWins" : false,
        "predictHomeWins" : false,
        "predictTie" : false
      }
    ]
  let gameDataAFCvsNFC = [
    {
        "gameID": "008",
        "away": "LV",
        "home": "CAR",
        "date": "THR-08-10-0820PM-EST",
        "awayOffBye": false,
        "homeOffBye": false,
        "predictAwayWins" : false,
        "predictHomeWins" : false,
        "predictTie" : false
      },
      {
        "gameID": "009",
        "away": "PIT",
        "home": "NYG",
        "date": "THR-08-10-0820PM-EST",
        "awayOffBye": false,
        "homeOffBye": false,
        "predictAwayWins" : false,
        "predictHomeWins" : false,
        "predictTie" : false
      }
  ]
  let gameDataNFC = [
    {
      "gameID": "010",
      "away": "SEA",
      "home": "ATL",
      "date": "THR-08-10-0820PM-EST",
      "awayOffBye": false,
      "homeOffBye": false,
      "predictAwayWins" : false,
      "predictHomeWins" : false,
      "predictTie" : false
    },
    {
      "gameID": "011",
      "away": "CHI",
      "home": "DET",
      "date": "THR-08-10-0820PM-EST",
      "awayOffBye": false,
      "homeOffBye": false,
      "predictAwayWins" : false,
      "predictHomeWins" : false,
      "predictTie" : false
    },
    {
      "gameID": "012",
      "away": "PHI",
      "home": "WAS",
      "date": "THR-08-10-0820PM-EST",
      "awayOffBye": false,
      "homeOffBye": false,
      "predictAwayWins" : false,
      "predictHomeWins" : false,
      "predictTie" : false
    },
    {
      "gameID": "013",
      "away": "GB",
      "home": "MIN",
      "date": "THR-08-10-0820PM-EST",
      "awayOffBye": false,
      "homeOffBye": false,
      "predictAwayWins" : false,
      "predictHomeWins" : false,
      "predictTie" : false
    },
    {
      "gameID": "014",
      "away": "ARI",
      "home": "SF",
      "date": "THR-08-10-0820PM-EST",
      "awayOffBye": false,
      "homeOffBye": false,
      "predictAwayWins" : false,
      "predictHomeWins" : false,
      "predictTie" : false
    },
    {
      "gameID": "015",
      "away": "TB",
      "home": "NO",
      "date": "THR-08-10-0820PM-EST",
      "awayOffBye": false,
      "homeOffBye": false,
      "predictAwayWins" : false,
      "predictHomeWins" : false,
      "predictTie" : false
    },
    {
      "gameID": "016",
      "away": "DAL",
      "home": "LA",
      "date": "THR-08-10-0820PM-EST",
      "awayOffBye": false,
      "homeOffBye": false,
      "predictAwayWins" : false,
      "predictHomeWins" : false,
      "predictTie" : false
    }
  ]

  return (
    <main className='App'>
      <NavHeader />
      <div className='game-board'>
        <MatchUp gameData={gameDataAFC} title={'AFC'}/>
        <MatchUp gameData={gameDataAFCvsNFC} title={'AFC vs NFC'}/>
        <MatchUp gameData={gameDataNFC} title={'NFC'}/>
      </div>
    </main>
  );
}

export default App;
