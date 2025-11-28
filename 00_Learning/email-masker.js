function maskEmail(email) {
  const lastBeforeDog = email.indexOf("@") - 1;
  const emailLeftover = email.slice(lastBeforeDog)
  const lastMaskedLetter = email.indexOf("@") - 2;
  const firstMaskedLetter = email.indexOf(email[0]);
  const maskedCharacters = email.slice(firstMaskedLetter, lastMaskedLetter)
  const repeatCharacters = maskedCharacters.length
  const maskedReadyCharacters = maskedCharacters.replaceAll(maskedCharacters, "*").repeat(repeatCharacters)
return email[0] + maskedReadyCharacters + emailLeftover
}

let email = 'apple.pie@example.com';
console.log(maskEmail(email))