const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits + 1;
} else {
    visitsDisplay.textContent = "This is your first visit to our Site!";
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);