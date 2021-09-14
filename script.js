const playerCards = document.querySelectorAll('.player')
const computerCards = document.querySelectorAll('.computer')
const result = document.querySelector('.result')
const score = document.querySelector('.score');


// initial score
var scoreValue = 0;
score.innerText = `Score = ${scoreValue}`

playerCards.forEach((card) => {
    card.addEventListener('click', (event) => {

        const target = event.currentTarget.getAttribute('data-player-card')
        doGame(target)
    })
})


function doGame(target) {
    let random = randomGenerate();
    computerCards.forEach((card, index) => {
        if (random === index) {
            card.firstElementChild.classList.add('rotate')
            const value = card.getAttribute('data-computer-card');
            generateResult(value, target);
            card.firstElementChild.addEventListener('transitionend', () => {

                card.firstElementChild.classList.remove('rotate');
            })
        }
    });
}

function generateResult(value, target) {
    console.log(target, value);
    if (value === target) {
        result.innerText = `${target} + ${value} = Do it again!`;
        score.innerText = `Score = ${scoreValue}`
        return;
    } else if (target === 'rock' && value === 'scissor') {
        result.innerText = `${target} + ${value} = YOU WIN`;
        scoreValue += 1;
        score.innerText = `Score = ${scoreValue}`
        return;
    } else if (target === 'paper' && value === 'rock') {
        result.innerText = `${target} + ${value} = YOU WIN`;
        scoreValue += 1;
        score.innerText = `Score = ${scoreValue}`
        return;
    } else if (target === 'scissor' && value === 'paper') {
        result.innerText = `${target} + ${value} = YOU WIN`;
        scoreValue += 1;
        score.innerText = `Score = ${scoreValue}`
        return;

    } else {
        result.innerText = `${target} + ${value} = YOU LOOSE`;
        scoreValue -= 1;
        score.innerText = `Score = ${scoreValue}`
        return;
    }

}

// function resetCard() {
//     computerCards.forEach((card) => {
//         console.log(card.firstElementChild.classList);
//         if (card.firstElementChild.classList.contains === 'rotate') {

//         }
//     });
// }

function randomGenerate() {
    return Math.floor(Math.random() * 3);
}