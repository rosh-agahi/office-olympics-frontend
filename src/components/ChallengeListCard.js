import React from 'react';

const ChallengeListCard = ({challenge}) => {

    return (
      <div className="challengelistitem">
        <a href="www.google.com">{challenge.name}</a>
      </div>
    )

}

export default ChallengeListCard;
