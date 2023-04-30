let player = {
    name: "Naveen",
    tips: 123,
}
let cards = []
let sum = 0
let blackjack = false
let hasAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let pla_El = document.getElementById("pl-el")

pla_El.textContent = player.name + ": $" + player.tips

console.log(pla_El)

function getRandomCard() {
    return (randomNum = Math.floor(Math.random() * 13) + 1)
}

function startGame() {
    hasAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards:"

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card"
    } else if (sum === 21) {
        message = "you've got the backjack"
        blackjack = true
    } else {
        message = "you're not in the game"
        hasAlive = false
    }
    messageEl.innerText = message
}

function newCard() {
    if (hasAlive === true && sum < 21) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}
