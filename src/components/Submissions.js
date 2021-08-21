import React from 'react';
import SubmissionCard from './SubmissionCard'
// import '../header.css';
// import '../App.css'

class Submissions extends React.Component {

  render() {
    return (
      <div>
        <h2>Challenge Submissions</h2>
        <p>These are all of the submissions</p>
        <SubmissionCard />
        <SubmissionCard />
        <SubmissionCard />
        
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

export default Submissions;
