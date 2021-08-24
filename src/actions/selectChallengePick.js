//action

export const pickChallenge = pick => {
  return {
   type: 'CHANGE_PICKED',
   payload: pick
  }
}
