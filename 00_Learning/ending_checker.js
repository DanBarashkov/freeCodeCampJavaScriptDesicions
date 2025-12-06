function confirmEnding(stringCheck, stringCheckAgainst) {

  const stringCheckPoint = stringCheck.length - stringCheckAgainst.length

  const stringPosition = stringCheck.includes(stringCheckAgainst, stringCheckPoint)

  if (stringPosition === true) {
    return true
  } else {
    return false
  }
}