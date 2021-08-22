import React from 'react';

class ThisChallenge extends React.Component {

  render() {
    return (
      <div>
        <h2>Challenge Name</h2>
        <p>Description</p>
        <p>Rules of the Road</p>
        <div className="challengeButtons">
          <button>New Submission</button>
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
