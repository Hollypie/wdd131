// this code generates and returns the current year.
function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
}

// this code calls the getCurrentYear() function and prints the year as part of a document. 
function displayYear() {
    const year = getCurrentYear();
    document.getElementById("yearDisplay").textContent = year;
}

function lastModified() {
    const dateTime = document.lastModified;
    document.getElementById("lastModified").textContent = "last modification: " + dateTime;
}

window.onload = function() {
    // this code tells the page to run displayYear() when the page load to the element that has the first incidence of the id of "displayYear".
    displayYear();
    // this code tells the page to run lastModified() when the page loads to the element that has the first incidence of the id of "lastModified".
    lastModified();
}

// This code is for the hamburger navigation.

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Orem Utah",
        location: "Orem, Utah",
        dedicated: "2024, January, 21",
        area: 71998,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/orem-utah-temple/orem-utah-temple-39549-main.jpg"
      },
      {
        templeName: "Mount Timpanogos Utah",
        location: "American Fork, Utah",
        dedicated: "1996, October, 13-19",
        area: 107240,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/mount-timpanogos-utah-temple/mount-timpanogos-utah-temple-21976.jpg"
      },
      {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah",
        dedicated: "1893, Aprit, 6-24",
        area: 382207,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
      },
  ];

document.addEventListener('DOMContentLoaded', () => {

    const photoAlbum = document.querySelector('.photoalbum');

    temples.forEach(obj => {
        const div = document.createElement('div');
        div.classList.add('temple-div');

        const formattedArea = obj.area.toLocaleString();

        // Create content dynamically for each temple
        div.innerHTML = `
            <h3>${obj.templeName}</h3>
            <p>Location: ${obj.location}</p>
            <p>Dedicated: ${obj.dedicated}</p>
            <p>Area: ${formattedArea} sq ft</p>
            <img src="${obj.imageUrl}" alt="${obj.templeName}" loading="lazy">
        `;

        // Append each div to the photoAlbum container
        photoAlbum.appendChild(div);
    });
});

const smallNav = document.getElementById('new');

document.addEventListener('click', function() {
    const smallTemples = temples.filter(temples.area < 10000);

    smalltemples.forEach(obj => {
        const div = document.createElement('div');
        div.classList.add('object-div');

        div.classList.add('temple-div');

        const formattedArea = obj.area.toLocaleString();

        // Create content dynamically for each temple
        div.innerHTML = `
            <h3>${obj.templeName}</h3>
            <p>Location: ${obj.location}</p>
            <p>Dedicated: ${obj.dedicated}</p>
            <p>Area: ${formattedArea} sq ft</p>
            <img src="${obj.imageUrl}" alt="${obj.templeName}" loading="lazy">
        `;

        // Append each div to the photoAlbum container
        photoAlbum.appendChild(div);
    });
})
