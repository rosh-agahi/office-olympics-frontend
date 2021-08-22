import React from 'react';
import ChallengeListCard from './ChallengeListCard.js'
// import '../header.css';
// import '../App.css'

class AllChallenges extends React.Component {

  componentDidMount() {
    fetch('http://127.0.0.1:3000/api/v1/challenges', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        <h2>All Challenges!</h2>
          <ChallengeListCard />
          <ChallengeListCard />
      </div>
    )
  }

  // constructor() {
  //   super()
  //   this.state = {
  //     challenges: []
  //   }
  // }
}

export default AllChallenges;
