// //  arrays.js
// const steps = ["one", "two", "three"];
// const listTemplate(step) => {
//   return `<li>${step}</li>`; //the html string made from step
// }

// const stepsHtml = steps.map(listTemplate);
// // use map to convert the list from strings to HTML
// document.querySelector("#myList").innerHTML = stepsHtml.join(); // set the innerHTML

// example 2
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

console.log(gpaPoints);

const gpaSum = gpaPoints.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

const GPA = gpaSum / gpaPoints.length;
console.log(GPA);

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortNameFruits = fruits.filter(function(fruit) {
    return fruit.length < 6;
});

console.log(shortNameFruits);

const numbers = [12, 34, 21, 54];
const luckyNum = 21;

const luckyIndex = numbers.indexOf(luckyNum);

console.log(luckyIndex);

const countries = ["Canada", "Chili", "Colombia", "Croatia", "Costa Rica"];
const countriesLong = countries.filter((country) => country.length > 7);

console.log(countriesLong);