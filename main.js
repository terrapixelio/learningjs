let totalTreats = document.getElementById('dog-treats')
let myFedTreats = document.getElementById('treats-fed')
let count = 0

function doggyTreats() {
    count += 1
    totalTreats.textContent = count
}

function saveTreats() {
    let savedTreats = count + ' '
    myFedTreats.textContent += savedTreats
    totalTreats.textContent = 0
    count = 0
}