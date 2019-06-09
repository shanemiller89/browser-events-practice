// -- Flight Button -- //

let flightButton = document.querySelector("#activate-flight");

flightButton.addEventListener("click", flightHandlerFunction);

function flightHandlerFunction(event) {
    let flight = document.querySelector("#flight");
    flight.setAttribute('class', 'power enabled')
}

// -- Mind Reading Button -- //
let mindButton = document.querySelector("#activate-mindreading");

mindButton.addEventListener("click", mindHandlerFunction);

function mindHandlerFunction(event) {
    let mindreading = document.querySelector("#mindreading");
    mindreading.setAttribute('class', 'power enabled')
}

// -- X-Ray Button -- //

let xrayButton = document.querySelector("#activate-xray");

xrayButton.addEventListener("click", xrayHandlerFunction);

function xrayHandlerFunction(event) {
    let xray = document.querySelector("#xray");
    xray.setAttribute('class', 'power enabled')
}

//-- Activate all Button --//
let activateAllButton = document.querySelector("#activate-all");

activateAllButton.addEventListener("click", activateAllHandler)

function activateAllHandler(event) {
    let all = document.querySelectorAll(".power");
    for (let i = 0; i < all.length; i++){
        all[i].setAttribute('class', 'power enabled');
    }
}

//-- Deactivate all Button --//

let deactivateAllButton = document.querySelector("#deactivate-all");

deactivateAllButton.addEventListener("click", deactivateAllHandler)

function deactivateAllHandler(event) {
    let all = document.querySelectorAll(".power");
    for (let i = 0; i < all.length; i++){
        all[i].setAttribute('class', 'power disabled');
    }
}