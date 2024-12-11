// hamburger menu code

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// Function to reset the menu to its default state for large screens
function checkWindowSize() {
    if (window.innerWidth > 650) {
        navigation.classList.remove('open');
        hamButton.classList.remove('open');
    }
}

// Listen for window resize events
window.addEventListener('resize', checkWindowSize);

// Run the check on initial page load to ensure the menu is correctly set for the current screen size
checkWindowSize();

// Code for the blog entries and how they display to the screen. the most recent entry for the home page and then the filtering for the blog page

const posts = [
    {
        title: "The Lord is my Shepherd",
        date: "2024-12-01",
        book: "Bible",
        reference: "Psalm 23",
        blurb: "Psalm 23 has always been a comforting passage, one that reminds us of God’s care and provision. The image of the Lord as a shepherd is one of the most tender and intimate in the Bible. Shepherds guide, protect, and care for their flocks, and in this psalm, David paints a picture of a loving God who provides for all our needs. As I reflect on this verse, I realize how often I’ve tried to control my own life, striving for more or worrying about what’s to come. Yet, in this simple truth, I find peace. If the Lord is my shepherd, then I am under His loving care, and I lack nothing. This doesn’t mean life will always be easy or free of struggle, but it does mean that God is with me in every circumstance, leading me to still waters and green pastures, and even walking with me through the valleys of life. This verse reminds me to trust in God's provision and direction, knowing that He is always leading me toward what is best. I am His sheep, and He is my faithful shepherd, guiding me with love and care.",
        imgFile: "images/Bible01m.webp"
    },
    {
        title: "The Virtous Woman",
        date: "2024-11-15",
        book: "Bible",
        reference: "Proverbs 32: 10-31",
        blurb: "Proverbs 31 offers a powerful portrayal of the virtuous woman, a woman who embodies strength, wisdom, and grace. As I reflect on this passage, I am reminded of the beauty in pursuing a life that honors God and serves others. The woman described in these verses is industrious, wise, and loving—she provides for her family, offers wise counsel, and is a pillar of strength in her home. What stands out to me is the fact that her worth is described as being “far more than rubies.” Her value is not based on outward appearance or material possessions, but on her character, her fear of the Lord, and her acts of service to others. Her strength comes from her relationship with God, and she does all things with excellence, not for her own gain, but to bless those around her. As I consider the example set in Proverbs 31, I’m encouraged to grow in my own character and to focus on building a life that reflects God’s goodness. True beauty comes from within, from a heart that seeks to honor God and serve others with love. The virtuous woman teaches us that a life of purpose, rooted in faith and service, is the greatest treasure we can possess.",
        imgFile: "images/Bible02m.webp"
    },
    {
        title: "Fear Not, I am with thee",
        date: "2024-10-26",
        book: "Bible",
        reference: "Isaiah 41: 13",
        blurb: "In times of uncertainty and fear, it's easy to feel overwhelmed and alone. But in Isaiah 41:13, God reminds us that He is always with us, guiding us through even the darkest of moments. The imagery of God holding our right hand gives us a picture of divine protection and support. The act of holding someone’s hand is often a symbol of comfort and reassurance, and God promises that He will never let go. As I meditate on this verse, I’m reminded of the times in my life when fear threatened to take hold of me. Yet, in those moments, I’ve experienced God’s loving presence and peace that surpasses all understanding. The Lord is our helper, and we are never alone. Whether we're facing a difficult season, personal struggle, or uncertain future, we can trust that God is with us every step of the way, offering His guidance, strength, and unwavering love.Let this verse be a reminder to take hold of God's hand and trust that He is with us, guiding us through life’s challenges. We don’t have to fear, because the Creator of the universe is on our side.",
        imgFile: "images/Bible03m.webp"
    }
];

function renderBlog(array) {
    const blog = document.querySelector('.blog');
    blog.innerHTML = '';

    array.forEach(obj => {
        const div = document.createElement('div');
        div.classList.add('blog-div');
        
        div.innerHTML = `
            <div class="blogCard">
                <div class="blogPost">
                    <div class="title"><h3 class="titlep">${obj.title}</h3></div>
                    <div class="date"><h4 class="datep">${obj.date}</h4></div>
                    <div class="reference"><h3 class="referencep">${obj.reference}</h3></div>
                    <div class="blurb"><p class="blurbp">${obj.blurb}</p></div>
                </div>      
                <div class="blogPhoto">
                    <img class="image" src="${obj.imgFile}">
                </div>
            </div>
            <br>`;
        
        blog.appendChild(div);
    });
}


document.querySelector('#filter').addEventListener('change', function() {
    const selectedOption = this.value;

    let sortedPosts = [...posts];

    if (selectedOption === "newestFirst") {
        sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        renderBlog(sortedPosts);
        document.querySelector('.blogTitle').textContent = "Newest to Oldest";
    } else if (selectedOption === "oldestFirst") {
        sortedPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
        renderBlog(sortedPosts);
        document.querySelector('.blogTitle').textContent = "Oldest to Newest";
    } else if (selectedOption === "bibleNew") {
        sortedPosts = posts.filter(post => post.book === "Bible")
                            .sort((a, b) => new Date(b.date) - new Date(a.date));
        renderBlog(sortedPosts);
        document.querySelector('.blogTitle').textContent = "Bible Only - Newest to Oldest";
    } else if (selectedOption === "bibleOld") {
        sortedPosts = posts.filter(post => post.book === "Bible")
                            .sort((a, b) => new Date(a.date) - new Date(b.date));
        renderBlog(sortedPosts);
        document.querySelector('.blogTitle').textContent = "Bible Only - Oldest to Newest";
    } else if (selectedOption === "mormonNew") {
        sortedPosts = posts.filter(post => post.book === "Mormon")
                            .sort((a, b) => new Date(b.date) - new Date(a.date));
        renderBlog(sortedPosts);
        document.querySelector('.blogTitle').textContent = "Mormon Only - Newest to Oldest";
    } else if (selectedOption === "mormonOld") {
        sortedPosts = posts.filter(post => post.book === "Mormon")
                            .sort((a, b) => new Date(a.date) - new Date(b.date));
        renderBlog(sortedPosts);
        document.querySelector('.blogTitle').textContent = "Mormon Only - Oldest to Newest";
    }
});


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
            <div class="title"><h2 class="titlep">${mostRecentEntry.title}</h2></div>
            <div class="date"><h3 class="datep">${mostRecentEntry.date}</h3></div>
            <div class="reference"><h3 class="referencep">${mostRecentEntry.reference}</h3></div>
            <div class="blurb"><p class="blurbp">${mostRecentEntry.blurb}</p></div>
        </div>      
        <div class="blogPhoto">
            <img class="image" src="${mostRecentEntry.imgFile}" alt="${mostRecentEntry.title}">
        </div>`;
}

document.addEventListener("DOMContentLoaded", function() {
    renderBlog(posts);
    loadMostRecentEntry();
});


// this following is the code as it was before combining the blog.js and faithful.js

// const hamButton = document.querySelector('#menu');
// const navigation = document.querySelector('.navigation');

// hamButton.addEventListener('click', () => {
// navigation.classList.toggle('open');
// hamButton.classList.toggle('open');
// });

// // Function to reset the menu to its default state for large screens
// function checkWindowSize() {
//     if (window.innerWidth > 650) {
//         // Remove 'open' class from both menu and hamburger button
//         navigation.classList.remove('open');
//         hamButton.classList.remove('open');
//     }
// }

// // Listen for window resize events
// window.addEventListener('resize', checkWindowSize);

// // Run the check on initial page load to ensure the menu is correctly set for the current screen size
// checkWindowSize();

// // create blog posts array

// const posts = [
//     {
//         title: "The Lord is my Shepherd",
//         date: "2024-12-01",
//         reference: "Psalm 23",
//         blurb: "Psalm 23 has always been a comforting passage, one that reminds us of God’s care and provision. The image of the Lord as a shepherd is one of the most tender and intimate in the Bible. Shepherds guide, protect, and care for their flocks, and in this psalm, David paints a picture of a loving God who provides for all our needs. As I reflect on this verse, I realize how often I’ve tried to control my own life, striving for more or worrying about what’s to come. Yet, in this simple truth, I find peace. If the Lord is my shepherd, then I am under His loving care, and I lack nothing. This doesn’t mean life will always be easy or free of struggle, but it does mean that God is with me in every circumstance, leading me to still waters and green pastures, and even walking with me through the valleys of life. This verse reminds me to trust in God's provision and direction, knowing that He is always leading me toward what is best. I am His sheep, and He is my faithful shepherd, guiding me with love and care.",
//         imgFile: "images/Bible01m.webp"
//     },
//     {
//         title: "The Virtous Woman",
//         date: "2024-11-15",
//         reference: "Proverbs 32: 10-31",
//         blurb: "Proverbs 31 offers a powerful portrayal of the virtuous woman, a woman who embodies strength, wisdom, and grace. As I reflect on this passage, I am reminded of the beauty in pursuing a life that honors God and serves others. The woman described in these verses is industrious, wise, and loving—she provides for her family, offers wise counsel, and is a pillar of strength in her home. What stands out to me is the fact that her worth is described as being “far more than rubies.” Her value is not based on outward appearance or material possessions, but on her character, her fear of the Lord, and her acts of service to others. Her strength comes from her relationship with God, and she does all things with excellence, not for her own gain, but to bless those around her. As I consider the example set in Proverbs 31, I’m encouraged to grow in my own character and to focus on building a life that reflects God’s goodness. True beauty comes from within, from a heart that seeks to honor God and serve others with love. The virtuous woman teaches us that a life of purpose, rooted in faith and service, is the greatest treasure we can possess.",
//         imgFile: "images/Bible02m.webp"
//     },
//     {
//         title: "Fear Not, I am with thee",
//         date: "2024-10-26",
//         reference: "Isaiah 41: 13",
//         blurb: "In times of uncertainty and fear, it's easy to feel overwhelmed and alone. But in Isaiah 41:13, God reminds us that He is always with us, guiding us through even the darkest of moments. The imagery of God holding our right hand gives us a picture of divine protection and support. The act of holding someone’s hand is often a symbol of comfort and reassurance, and God promises that He will never let go. As I meditate on this verse, I’m reminded of the times in my life when fear threatened to take hold of me. Yet, in those moments, I’ve experienced God’s loving presence and peace that surpasses all understanding. The Lord is our helper, and we are never alone. Whether we're facing a difficult season, personal struggle, or uncertain future, we can trust that God is with us every step of the way, offering His guidance, strength, and unwavering love.Let this verse be a reminder to take hold of God's hand and trust that He is with us, guiding us through life’s challenges. We don’t have to fear, because the Creator of the universe is on our side.",
//         imgFile: "images/Bible03m.webp"
//     }
// ]

// function findMostRecentEntry() {
//     const mostRecentEntry = posts.reduce((mostRecent, currentEntry) => {

//         if (new Date(currentEntry.date) > new Date(mostRecent.date)) {
//             return currentEntry;
//         }
//         return mostRecent;
//     }, posts[0]);
//     return mostRecentEntry;
// }

// function loadMostRecentEntry() {

//     const mostRecentEntry = findMostRecentEntry();

//     const entryTitle = document.querySelector(".titlep");
//     entryTitle.textContent = mostRecentEntry.title;

//     const entryDate = document.querySelector(".datep");
//     entryDate.textContent = mostRecentEntry.date;

//     const entryReference = document.querySelector(".referencep");
//     entryReference.textContent = mostRecentEntry.reference;

//     const entryBlurb = document.querySelector(".blurbp");
//     entryBlurb.textContent = mostRecentEntry.blurb;

//     const entryImage = document.querySelector(".image");
//     entryImage.src = mostRecentEntry.imgFile;
// }

// document.addEventListener("DOMContentLoaded", function() {
//     loadMostRecentEntry();
// });

// // Code for the form submit alert

// const form = document.getElementById('mailingListForm');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     alert("Congrats! You have joined our mailing list!");
// });





// this is the loadmostrecententry code I was trying to make work

// function findMostRecentEntry() {
//     // Ensure that the posts array is not empty and has valid dates
//     if (posts.length === 0) {
//         console.log("No posts available.");
//         return null; // Return null if there are no posts
//     }

//     const mostRecentEntry = posts.reduce((mostRecent, currentEntry) => {
//         const currentDate = new Date(currentEntry.date);
//         const mostRecentDate = new Date(mostRecent.date);

//         // Check if current entry's date is greater than the most recent one
//         if (currentDate > mostRecentDate) {
//             return currentEntry;
//         }
//         return mostRecent;
//     }, posts[0]); // Start with the first post in the array

//     return mostRecentEntry;
// }

// function loadMostRecentEntry() {
//     const mostRecentEntry = findMostRecentEntry();
//     console.log("Most Recent Entry:", mostRecentEntry);  // Debugging line

//     const recentEntry = document.querySelector('.recentBlogCard');
//     console.log(recentEntry);  // Debugging line

//     recentEntry.innerHTML = `
//         <div class="blogPost">
//             <div class="title"><h2 class="titlep">${mostRecentEntry.title}</h2></div>
//             <div class="date"><h3 class="datep">${mostRecentEntry.date}</h3></div>
//             <div class="reference"><h3 class="referencep">${mostRecentEntry.reference}</h3></div>
//             <div class="blurb"><p class="blurbp">${mostRecentEntry.blurb}</p></div>
//         </div>      
//         <div class="blogPhoto">
//             <img class="image" src="${mostRecentEntry.imgFile}" alt="${mostRecentEntry.title}">
//         </div>`;
// }

// document.addEventListener("DOMContentLoaded", function() {
//     renderBlog(posts);
//     loadMostRecentEntry();
// });

