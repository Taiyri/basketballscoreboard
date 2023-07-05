eventListener(document.querySelector("#home .plus-one"));
eventListener(document.querySelector("#home .plus-two"));
eventListener(document.querySelector("#home .plus-three"));
eventListener(document.querySelector("#guest .plus-one"));
eventListener(document.querySelector("#guest .plus-two"));
eventListener(document.querySelector("#guest .plus-three"));

function plusOne(score) {
    score.textContent = Number(score.textContent) + 1;
}

function plusTwo(score) {
    score.textContent = Number(score.textContent) + 2;
}

function plusThree(score) {
    score.textContent = Number(score.textContent) + 3;
}

function eventListener (button) {
    button.addEventListener("click", function (event) {
        teamChooser(event);
        });
}

function teamChooser (event) {
    if (event.target.parentElement.id === "home"){
        pointChooser(event, "home-score");
    }
    else{
        pointChooser(event, "guest-score");
    }
}

function pointChooser(event, teamScore) {
    if (event.target.classList[0] === "plus-one"){
        plusOne(document.getElementById(teamScore));
    }
    else if (event.target.classList[0] === "plus-two"){
        plusTwo(document.getElementById(teamScore));
    }
    else {
        plusThree(document.getElementById(teamScore));
    }
}

function reset() {
    document.getElementById("guest-score").textContent = "0";
    document.getElementById("home-score").textContent = "0";
}