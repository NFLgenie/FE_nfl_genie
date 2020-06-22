import React from 'react';
import NavHeader from './components/NavHeader/NavHeader';
import MatchUp from './components/MatchUp/MatchUp';
import CurrentRecord from './components/CurrentRecord/CurrentRecord';
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
        "prediction" : null
      },
      {
        "gameID": "002",
        "away": "NYJ",
        "home": "BUF",
        "date": "SUN-08-13-0100PM-EST",
        "awayOffBye": false,
        "homeOffBye": false,
        "prediction" : null
      },
      {
        "gameID": "003",
        "away": "IND",
        "home": "JAC",
        "date": "SAT-08-10-0820PM-EST",
        "awayOffBye": false,
        "homeOffBye": false,
        "prediction" : null
      },
      {
        "gameID": "004",
        "away": "MIA",
        "home": "NE",
        "date": "THR-08-10-0820PM-EST",
        "awayOffBye": false,
        "homeOffBye": false,
        "prediction" : null
      },
      {
        "gameID": "005",
        "away": "CLE",
        "home": "BAL",
        "date": "SUN-08-10-0820PM-EST",
        "awayOffBye": false,
        "homeOffBye": false,
        "prediction" : null
      },
      {
        "gameID": "006",
        "away": "LAC",
        "home": "CIN",
        "date": "MON-08-10-0820PM-EST",
        "awayOffBye": false,
        "homeOffBye": false,
        "prediction" : null
      },
      {
        "gameID": "007",
        "away": "TEN",
        "home": "DEN",
        "date": "THR-08-10-0820PM-EST",
        "awayOffBye": false,
        "homeOffBye": false,
        "prediction" : null
      }
    ]
  let gameDataAFCvsNFC = [
    {
        "gameID": "008",
        "away": "LV",
        "home": "CAR",
        "date": "SUN-08-10-0820PM-EST",
        "awayOffBye": false,
        "homeOffBye": false,
        "prediction" : null
      },
      {
        "gameID": "009",
        "away": "PIT",
        "home": "NYG",
        "date": "THR-08-10-0820PM-EST",
        "awayOffBye": false,
        "homeOffBye": false,
        "prediction" : null
      }
  ]
  let gameDataNFC = [
    {
      "gameID": "010",
      "away": "SEA",
      "home": "ATL",
      "date": "MON-08-10-0820PM-EST",
      "awayOffBye": false,
      "homeOffBye": false,
      "prediction" : null
    },
    {
      "gameID": "011",
      "away": "CHI",
      "home": "DET",
      "date": "FRI-08-10-0820PM-EST",
      "awayOffBye": false,
      "homeOffBye": false,
      "prediction" : null
    },
    {
      "gameID": "012",
      "away": "PHI",
      "home": "WAS",
      "date": "THR-08-10-0820PM-EST",
      "awayOffBye": false,
      "homeOffBye": false,
      "prediction" : null
    },
    {
      "gameID": "013",
      "away": "GB",
      "home": "MIN",
      "date": "SAT-08-10-0820PM-EST",
      "awayOffBye": false,
      "homeOffBye": false,
      "prediction" : null
    },
    {
      "gameID": "014",
      "away": "ARI",
      "home": "SF",
      "date": "THR-08-10-0820PM-EST",
      "awayOffBye": false,
      "homeOffBye": false,
      "prediction" : null
    },
    {
      "gameID": "015",
      "away": "TB",
      "home": "NO",
      "date": "SUN-08-10-0820PM-EST",
      "awayOffBye": false,
      "homeOffBye": false,
      "prediction" : null
    },
    {
      "gameID": "016",
      "away": "DAL",
      "home": "LAC",
      "date": "SAT-08-10-0820PM-EST",
      "awayOffBye": false,
      "homeOffBye": false,
      "prediction" : null
    }
  ]

  return (
    <main className='App'>
      <NavHeader />
      <div className='game-board'>
        <CurrentRecord title={'AFC'}/>
        <MatchUp gameData={gameDataAFC} title={'AFC'}/>
        <MatchUp gameData={gameDataAFCvsNFC} title={'AFC vs NFC'}/>
        <MatchUp gameData={gameDataNFC} title={'NFC'}/>
        
      </div>
    </main>
  );
}

export default App;
