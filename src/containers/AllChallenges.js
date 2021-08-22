import React from 'react';
import ChallengeListCard from '../components/ChallengeListCard.js'
// import '../header.css';
// import '../App.css'

class AllChallenges extends React.Component {

  constructor() {
    super()
    this.state = {
      challenges: []
    }
  }

  componentDidMount() {
    fetch('http://127.0.0.1:3000/api/v1/challenges', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(challenges => this.setState({challenges: challenges}))
  }

  render() {
    const challengeItems = this.state.challenges.map(challenge => <ChallengeListCard key={challenge.id} challenge={challenge}/>)
    return (
      <div>
        <h2>All Challenges</h2>
          <div>
            { challengeItems }
          </div>
      </div>
    )
  }

}

export default AllChallenges;