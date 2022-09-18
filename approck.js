const choiceButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan= document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const CHOICES = [
{
  name: 'rock',
  pic: '💎',
  beats: 'scissors'
},
{
  name: 'paper',
  pic: '📄',
  beats: 'rock'
},
{
  name: 'scissors',
  pic: '✂️',
  beats: 'paper'
},
]

choiceButtons.forEach(choiceButton => {
  choiceButton.addEventListener('click', e=> {
    const choiceName = choiceButton.dataset.selection
    const choice = CHOICES.find(choice => choice.name === choiceName)
makeChoice(choice)
  })
})

function makeChoice(choice) {
  const computerChoice = randomChoice()
  const youWinner = isWinner(choice, computerChoice)
  const computerWinner = isWinner(computerChoice, choice)
  addResult(computerChoice, computerWinner)
  addResult(choice, youWinner)
  if(youWinner)  changeScore(yourScoreSpan)
  if(computerWinner) changeScore(computerScoreSpan)
  console.log(computerChoice)
}

function changeScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}


function addResult (choice, winner) {
  const div = document.createElement('div')
  div.innerText = choice.pic
  div.classList.add('score-selection')
  if(winner) div.classList.add('winner')
  finalColumn.after(div)
}


function isWinner(choice, computerChoice) {
  return choice.beats === computerChoice.name

}
function randomChoice() {
  const randomChoice = Math.floor(Math.random() * CHOICES.length)
  return CHOICES[randomChoice]
}
