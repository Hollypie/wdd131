myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };

function formatFoodString(string) {
    return "<li>" + string + "</li>";
}

function formatPlace(array) {
    let place = array.place;
    let length = array.length; 
    return `<dt>${place}</dt><dd>${length}</dd>`;  // Corrected with template literals
}

function formatString(item) {
    return "<li>" + item + "</li>";
}

function generateHTML(list, templateFunction) {
    return list.map(templateFunction).join(""); 
}

const html1 = generateHTML(myInfo.favoriteFoods, formatString); 
const html2 = generateHTML(myInfo.placesLived, formatPlace);  


test1.innerHTML = html1;   
test2.innerHTML = html2;  

//   myInfo.favoriteFoods.forEach(function(food, index) {
//     let favoriteFood = document.createElement("li");
//     favoriteFood.textContent = myInfo.favoriteFoods[index];
//     document.querySelector("#favorite-foods").appendChild(favoriteFood);
//   })

//   myInfo.hobbies.map(function(hobby) {
//     let favoriteHobby = document.createElement("li");
//     favoriteHobby.textContent = hobby;
//     document.querySelector 
test1.innerHTML = html1;  // Display favorite foods as an HTML list("#favorite-hobbies").appendChild(favoriteHobby)
//   });


//   // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
//   let favoriteFood1 = document.createElement("li");
//   favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
//   let favoriteFood2 = document.createElement("li");
//   favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
//   let favoriteFood3 = document.createElement("li");
//   favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
//   let favoriteFood4 = document.createElement("li");
//   favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
//   // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
//   document.querySelector("#favorite-foods").appendChild(favoriteFood1);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood2);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood3);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood4);