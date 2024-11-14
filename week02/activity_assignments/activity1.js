
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

studentReport.forEach(function(number) {
     if (number < LIMIT) {
        console.log(number);
     }
})

let count = 0;
let maxCount = studentReport.length;

while (count < maxCount) {
    if (studentReport[count] < LIMIT) {
        console.log(studentReport[count]);
     }
    count++;
}

for (let i = 0; i < maxCount; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
     }
}

for (let num in studentReport) {
    if (studentReport[num] < LIMIT) {
        console.log(studentReport[num]);
     }
}

const DAYS = 6;
const today = new Date();
const todayDay = today.getDay();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("Today is " + daysOfWeek[todayDay]);


for (let i = 1; i <= DAYS; i++) {
    const nextDay = (todayDay + i) % 7;
    console.log(`In ${i} day(s), it will be: ${daysOfWeek[nextDay]}`);
}





