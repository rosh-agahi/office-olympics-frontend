import React from 'react'
import {connect} from 'react-redux'
import {upVote} from '../actions/upvote'


class Vote extends React.Component {

  state = {
    votes: this.props.submission.votes +1,
    submission_id: this.props.submission.id
  }

  handleVote = (e) => {
    e.preventDefault()
    // console.log(this.state)
    this.props.upVote(this.state, this.props.submission.id)
  }

  render() {
    return (
      <div>
        <p className="votetally">Votes: <br />
          <strong>{this.props.submission.votes}</strong></p>

        <form
          onSubmit={this.handleVote}
        >
          <input
            type="submit"
            value="UpVote"/>
        </form>

      </div>
  )}
}

export default connect(null, {upVote})(Vote)
