const questions = [
  {
    category: 'One',
    question: 'One is?',
    choices: ['One', 'Four', 'Two'],
    answer: 'One'
  },
  {
    category: 'Two',
    question: 'Two is?',
    choices: ['One', 'Two', 'Five'],
    answer: 'Two'
  },
  {
    category: 'Three',
    question: 'Three is?',
    choices: ['Four', 'Two', 'Three'],
    answer: 'Three'
  },
  {
    category: 'Four',
    question: 'Four is?',
    choices: ['Four', 'Two', 'Three'],
    answer: 'Four'
  },
  {
    category: 'Five',
    question: 'Five is?',
    choices: ['One', 'Two', 'Five'],
    answer: 'Five'
  }
];

function getRandomQuestion(questions) {
  return questions[Math.round(Math.random() * questions.length)]; 
}

function getRandomComputerChoice(choices) {
  return choices[Math.round(Math.random() * choices.length)];
}

function getResults(getRandomQuestion, getRandomComputerChoice) {
  if(getRandomQuestion.answer === getRandomComputerChoice) {
    return "The computer's choice is correct!"
  } else {
    return "The computer's choice is wrong. The correct answer is: " + getRandomQuestion.answer
  }
}