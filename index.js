let homeScore = document.getElementById("homeScore-el")
let guestScore = document.getElementById("guestScore-el")

hs = 0
gs = 0

function home_add_1() {
    hs += 1
    homeScore.textContent = hs
}

function home_add_2() {
    hs += 2
    homeScore.textContent = hs
}

function home_add_3() {
    hs += 3
    homeScore.textContent = hs
}

function guest_add_1() {
    gs += 1
    guestScore.textContent = gs
}

function guest_add_2() {
    gs += 2
    guestScore.textContent = gs
}

function guest_add_3() {
    gs += 3
    guestScore.textContent = gs
}