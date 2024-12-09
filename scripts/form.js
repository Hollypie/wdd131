const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

// Code that populates select element with products from the objects in the products array.

const selectProduct = document.getElementById("productName");

function populateSelect() {

    selectProduct.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select a Product";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    selectProduct.appendChild(defaultOption);

    products.forEach(product => {
        
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
    
        selectProduct.appendChild(option);
    });
}

document.addEventListener("DOMContentLoaded", populateSelect);

// Code that creates a counter using localstorage to keep track of how many reviews a user submits.

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits + 1;
} else {
    visitsDisplay.textContent = "This is your first submitted review!";
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
