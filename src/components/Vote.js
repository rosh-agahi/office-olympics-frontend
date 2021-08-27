import React from 'react'


class Vote extends React.Component {

  handleVote = (e) => {

  }

  render() {
    return (
      <div>
        <p className="votetally">Votes: <br />
          <strong>{this.props.submission.votes}</strong></p>

        <form>
          <input
            type="text"
            name="votes"
            value={this.props.submission.votes + 1}
          />

          <input
            type="submit"
            value="UpVote"/>
        </form>

      </div>
  )}
}

export default Vote
