import React from 'react';
import {connect} from 'react-redux';
import {fetchChallenges} from '../actions/fetchChallenges'
import ChallengeListCard from '../components/ChallengeListCard'
// import '../header.css';
// import '../App.css'

class AllChallenges extends React.Component {

  componentDidMount() {
    this.props.fetchChallenges()
  }

  render() {
    const challengeItems = this.props.challenges.map(challenge => <ChallengeListCard key={challenge.id} challenge={challenge}/>)
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

const mapStateToProps = state => {
  return {
    challenges: state.challenges
  }
}
// takes the state from the redux store and returns a challenges object

export default connect(mapStateToProps, {fetchChallenges})(AllChallenges);
