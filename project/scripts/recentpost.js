

function findMostRecentEntry() {
    // Ensure that the posts array is not empty and has valid dates
    if (posts.length === 0) {
        console.log("No posts available.");
        return null; // Return null if there are no posts
    }

    const mostRecentEntry = posts.reduce((mostRecent, currentEntry) => {
        const currentDate = new Date(currentEntry.date);
        const mostRecentDate = new Date(mostRecent.date);

        // Check if current entry's date is greater than the most recent one
        if (currentDate > mostRecentDate) {
            return currentEntry;
        }
        return mostRecent;
    }, posts[0]); // Start with the first post in the array

    return mostRecentEntry;
}

function loadMostRecentEntry() {
    const mostRecentEntry = findMostRecentEntry();
    console.log("Most Recent Entry:", mostRecentEntry);  // Debugging line

    const recentEntry = document.querySelector('.recentBlogCard');
    console.log(recentEntry);  // Debugging line

    recentEntry.innerHTML = `
        <div class="blogPost">
            <div class="title"><h3 class="titlep">${mostRecentEntry.title}</h3></div>
            <div class="date"><h4 class="datep">${mostRecentEntry.date}</h4></div>
            <div class="reference"><h4 class="referencep">${mostRecentEntry.reference}</h4></div>
            <div class="blurb"><p class="blurbp">${mostRecentEntry.blurb}</p></div>
        </div>      
        <div class="blogPhoto">
            <img class="image" src="${mostRecentEntry.imgFile}" alt="${mostRecentEntry.title} - ${mostRecentEntry.reference}" loading="lazy">
        </div>`;
}

document.addEventListener("DOMContentLoaded", function() {
    loadMostRecentEntry();
});

// Get the form element
const form = document.getElementById('mailingListForm');

// Add an event listener to the form for the 'submit' event
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting the traditional way (page reload)
    event.preventDefault();
    
    // Show an alert that the user has been added to the mailing list
    alert('You have been added to our mailing list!');
    
    // Optionally, clear the form or reset it
    form.reset();
});