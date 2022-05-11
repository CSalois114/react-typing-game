import React, {useState, useEffect} from 'react'

export default function Leaderboard() {
  const [jedis, setJedis] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8001/highScores")
    .then(r=>r.json())
    .then(setJedis)
  }, []);

  const renderJediMasters = jedis.sort((a,b)=>{return b.score - a.score})
  .map(jedi=>{
    return (
        <tr key={jedi.id}>
          <td style={{"font-family": 'Star Jedi'}}>{jedi.name.toLowerCase()}</td>
          <td>{jedi.wpm}</td>
          <td>{jedi.accuracy}%</td>
          <td id='swFont' style={{"color": '#FFE81F'}}>{jedi.score}</td>
        </tr>
    )
  })

  return (
    <div>
      <h1 id="swFont" style={{"color": '#FFE81F'}}>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Master</th>
            <th>Words/Minute</th>
            <th>Accuracy</th>
            <th id='swFont' style={{"color": '#FFE81F'}}>Score</th>
          </tr>
        </thead>
        <tbody>
        {renderJediMasters}
        </tbody>
      </table>
    </div>
  )
}