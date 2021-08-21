import React from 'react';
import Submissions from './Submissions.js'
// import '../header.css';
// import '../App.css'

class ThisChallenge extends React.Component {

  render() {
    return (
      <div>
        <h2>Challenge Name</h2>
        <p>Description</p>
        <p>Rules of the Road</p>
        <div className="challengeButtons">
          <button>Close Challenge</button>
          <button>New Submission</button>
        </div>
        <div>
          <h3>Submissions</h3>
          <Submissions />
        </div>
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

export default ThisChallenge;
