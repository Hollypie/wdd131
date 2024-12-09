const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

let chapterArray = getChapterList() || [];

chaptersArray.forEach(chapter => {diplayList(chapter);

});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    
    let li = document.createElement("li");
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.remvoveChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it. ');
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapterArray = chapterArray.filter((item) => item !== chapter);
    setChapterList();
}

button.addEventListener("click", function() {
    if (input.value.trim() !== '') {
        

        const li = document.createElement("li"); // this item will hold the entries chapter title and a delete button.

        const deleteButton = document.createElement("button");

        li.textContent = input.value;

        deleteButton.textContent = "X";

        li.append(deleteButton);

        list.appendChild(li);

        deleteButton.addEventListener("click", function() {
            list.removeChild(li);
            input.focus();

        input.value = "";
        });
    } 
    
    else {
        input.focus();
    }
});



