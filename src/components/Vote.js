import React from 'react'


const Vote = ({submission}) => {
  return (
    <div>
      <p className="votetally">Votes: <br />
        <strong>{submission.votes}</strong></p>

      <button
        id={submission.id}
        onClick={() => console.log(submission.id)}
        >
        UpVote!
      </button>
      </div>
  )
}

export default Vote
