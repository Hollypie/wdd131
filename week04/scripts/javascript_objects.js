// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { 
            sectionNum: 1, 
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro T',
        },
        { 
            sectionNum: 2, 
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A',
        },
    ],
    enrollStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    },
    dropStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        }
    },
};


document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
});

// This is the way I coded it before copying and comparing the solution code.
// const inputField = document.getElementById('sectionNumber');
// const enroll = document.getElementById('enrollStudent');
// const drop = document.getElementById('dropStudent');

// enroll.addEventListener('click', function() {
//     const inputValue = inputField.value;
//     aCourse.enrollStudent(inputValue);
// });
// drop.addEventListener('click', function() {
//     const inputValue = inputField.value;
//     aCourse.dropStudent(inputValue);
// });

function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function sectionTemplate(section) {
    return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>`    
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}     

setCourseInfo(aCourse);
renderSections(aCourse.sections);


let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

const bNames = names.filter((word) => word[0] === 'B');

console.log(bNames);

const nameLengths = names.map(name => name.length);

console.log(nameLengths);

let count = names.reduce((accumulator, name) => {
    return accumulator + name.length;
}, 0);

console.log(count);