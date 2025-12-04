function truncateString(stringSentence, numberQuantity) {
  if (stringSentence.length > numberQuantity) {
    return stringSentence.slice(0,numberQuantity) + "..."
  } else {
    return stringSentence
  }
}