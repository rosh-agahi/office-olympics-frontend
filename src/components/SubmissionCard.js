import React from 'react';
// import '../header.css';
// import '../App.css'

class SubmissionCard extends React.Component {

  render() {
    return (
      <div className="submissioncard">
        <h2>Submission Card</h2>
        <p>Name, Submission photos....</p>
        <button className="vote">Vote</button>
        <p>Vote Tally: 15</p>
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

export default SubmissionCard;
