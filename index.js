let homescorebtnone = document.getElementById("home-score-btn-1")
let homescorebtntwo = document.getElementById("home-score-btn-2")
let homescorebtnthree = document.getElementById("home-score-btn-3")
let homestoreEl = document.getElementById("home-score")
let homescore = 0

function increasehomescoreone(){
    homescore += 1
    homestoreEl.textContent = homescore
}
function increasehomescoretwo(){
    homescore += 2
    homestoreEl.textContent = homescore
}

function increasehomescorethree(){
    homescore +=3
    homestoreEl.textContent = homescore
}

let guestscorebtnone = document.getElementById("guest-score-btn-1")
let guestscorebtntwo = document.getElementById("guest-score-btn-2")
let guestscorebtnthree = document.getElementById("guest-score-btn-3")
let gueststoreEl = document.getElementById("Guest-score")
let guestscore = 0

function increaseguestscoreone(){
    guestscore += 1
    gueststoreEl.textContent = guestscore
}
function increaseguestscoretwo(){
    guestscore += 2
    gueststoreEl.textContent = guestscore
}
function increaseguestscorethree(){
    guestscore += 3
    gueststoreEl.textContent = guestscore
}