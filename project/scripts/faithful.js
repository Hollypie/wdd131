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
        blurb: "Psalm 23 has always been a comforting passage, one that reminds us of God\’s care and provision. The image of the Lord as a shepherd is one of the most tender and intimate in the Bible. Shepherds guide, protect, and care for their flocks, and in this psalm, David paints a picture of a loving God who provides for all our needs. As I reflect on this verse, I realize how often I\’ve tried to control my own life, striving for more or worrying about what\’s to come. Yet, in this simple truth, I find peace. If the Lord is my shepherd, then I am under His loving care, and I lack nothing. This doesn\’t mean life will always be easy or free of struggle, but it does mean that God is with me in every circumstance, leading me to still waters and green pastures, and even walking with me through the valleys of life. This verse reminds me to trust in God's provision and direction, knowing that He is always leading me toward what is best. I am His sheep, and He is my faithful shepherd, guiding me with love and care.",
        imgFile: "images/Bible01m.webp"
    },
    {
        title: "The Virtous Woman",
        date: "2024-11-15",
        book: "Bible",
        reference: "Proverbs 32: 10-31",
        blurb: "Proverbs 31 offers a powerful portrayal of the virtuous woman, a woman who embodies strength, wisdom, and grace. As I reflect on this passage, I am reminded of the beauty in pursuing a life that honors God and serves others. The woman described in these verses is industrious, wise, and loving—she provides for her family, offers wise counsel, and is a pillar of strength in her home. What stands out to me is the fact that her worth is described as being \“far more than rubies.\” Her value is not based on outward appearance or material possessions, but on her character, her fear of the Lord, and her acts of service to others. Her strength comes from her relationship with God, and she does all things with excellence, not for her own gain, but to bless those around her. As I consider the example set in Proverbs 31, I\’m encouraged to grow in my own character and to focus on building a life that reflects God\’s goodness. True beauty comes from within, from a heart that seeks to honor God and serve others with love. The virtuous woman teaches us that a life of purpose, rooted in faith and service, is the greatest treasure we can possess.",
        imgFile: "images/Bible02m.webp"
    },
    {
        title: "Fear Not, I am with thee",
        date: "2024-10-26",
        book: "Bible",
        reference: "Isaiah 41: 13",
        blurb: "In times of uncertainty and fear, it\'s easy to feel overwhelmed and alone. But in Isaiah 41:13, God reminds us that He is always with us, guiding us through even the darkest of moments. The imagery of God holding our right hand gives us a picture of divine protection and support. The act of holding someone\’s hand is often a symbol of comfort and reassurance, and God promises that He will never let go. As I meditate on this verse, I\’m reminded of the times in my life when fear threatened to take hold of me. Yet, in those moments, I\’ve experienced God\’s loving presence and peace that surpasses all understanding. The Lord is our helper, and we are never alone. Whether we're facing a difficult season, personal struggle, or uncertain future, we can trust that God is with us every step of the way, offering His guidance, strength, and unwavering love.Let this verse be a reminder to take hold of God's hand and trust that He is with us, guiding us through life’s challenges. We don\’t have to fear, because the Creator of the universe is on our side.",
        imgFile: "images/Bible03m.webp"
    },
    {
        title: "Let not man put assunder",
        date: "2024-7-6",
        book: "Bible",
        reference: "Matthew 19:6",
        blurb: "In Matthew 19:6, Jesus teaches us the profound truth about marriage: \“What therefore God hath joined together, let not man put asunder.\” This powerful statement highlights the sacred and unbreakable nature of the marital bond. When God joins a couple together, it is not just a legal contract but a divine union meant to endure. In our scripture journaling, we can reflect on the importance of nurturing and protecting the relationships in our lives, remembering that marriage is a covenant to honor, support, and love one another, as God intended.",
        imgFile: "images/Bible04s.webp"
    },
    {
        title: "Her ways are ways of Pleasantness",
        date: "2024-12-05",
        book: "Bible",
        reference: "Proverbs 3:17",
        blurb: "In Proverbs 3:17, we are told, \“Her ways are ways of pleasantness, and all her paths are peace.\” This verse speaks to the transformative power of wisdom. The \"her\" in this passage refers to wisdom, which the writer personifies as a guide to living a fulfilling and peaceful life. When we seek wisdom and align our lives with it, we experience not just understanding, but also a life filled with harmony and contentment. In our scripture journaling, we can reflect on how pursuing wisdom leads to \“pleasantness\” in our daily lives. Wisdom\’s ways are not burdensome or filled with strife but offer a path of peace and joy. Whether in decisions, relationships, or spiritual growth, the pursuit of wisdom enables us to navigate life's challenges with grace and tranquility. As we focus on applying wisdom to our lives, we can find the peace that comes from walking in alignment with God\’s will.",
        imgFile: "images/Bible05s.webp"
    },
    {
        title: "The Lords Prayer",
        date: "2024-12-12",
        book: "Bible",
        reference: "Matthew 6:9-13",
        blurb: "In Matthew 6:9-13, Jesus provides us with the well-known Lord's Prayer, a model for how we should approach God in prayer. This prayer begins with addressing God as our \"Father,\" highlighting a personal relationship with our Creator. We are reminded that God is holy, and we are called to honor His name. The phrase \"Thy kingdom come, Thy will be done on earth as it is in heaven\" reflects our submission to God's divine plan and our desire for His kingdom to be established in our hearts and lives. Next, we ask for our \"daily bread,\" acknowledging our dependence on God for our physical needs, while the plea for forgiveness teaches us the importance of grace—both receiving it from God and extending it to others. \"Lead us not into temptation, but deliver us from evil\" is a request for protection, recognizing our vulnerability and need for God's strength to overcome life's challenges. As we reflect on this prayer in our scripture journaling, it\’s a powerful reminder to seek God's will, trust in His provision, and align our hearts with His purposes. This prayer serves as both a personal conversation with God and a guide for living a life devoted to Him.",
        imgFile: "images/Bible06s.webp"
    },
    {
        title: "Baptism of Jesus",
        date: "2024-12-02",
        book: "Bible",
        reference: "Matthew 3:13-17",
        blurb: "In Matthew 3:13-17, we witness a powerful moment in the life of Jesus—the moment of His baptism. Jesus, though sinless, comes to John the Baptist at the Jordan River, asking to be baptized. John, recognizing Jesus\’ holiness, hesitates, but Jesus responds, \“Suffer it to be so now: for thus it becometh us to fulfil all righteousness.\” (Matthew 3:15). Jesus\’ willingness to be baptized, despite His perfection, shows His obedience to the will of God and His desire to set an example for all of us. As Jesus is baptized, the heavens open, and the Spirit of God descends like a dove upon Him. A voice from heaven declares, “This is my beloved Son, in whom I am well pleased\” (Matthew 3:17). This divine declaration affirms Jesus\’ identity as the Son of God and marks the beginning of His public ministry. In our scripture journaling, we can reflect on the significance of this event. Jesus\’ baptism demonstrates humility, obedience, and a deep submission to God\'s will. It also invites us to examine our own lives—how can we, like Jesus, humbly follow God\’s guidance and live in accordance with His purpose?",
        imgFile: "images/Bible07s.webp"
    },
    {
        title: "Satans Temptation",
        date: "2024-7-16",
        book: "Bible",
        reference: "Matthew 4",
        blurb: "In Matthew Chapter 4, Jesus begins His ministry with two powerful lessons that can deeply impact our spiritual lives. First, He calls Simon Peter and his brother Andrew, saying, \“Follow me, and I will make you fishers of men\” (Matthew 4:19). This invitation to discipleship is a call to action—Jesus asks us not only to follow Him but to help bring others to Him. Just as fishermen cast their nets to gather fish, we are called to share the gospel and bring others into the fold of Christ. Secondly, when tempted by Satan in the wilderness, Jesus teaches us the importance of spiritual nourishment. In response to Satan's temptation to turn stones into bread, Jesus declares, \“Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God\” (Matthew 4:4). This powerful truth reminds us that our spiritual needs far outweigh our physical desires. True fulfillment comes not from earthly comforts but from living according to God\’s will and seeking His word. As we reflect on these lessons in our scripture journaling, let\’s consider how we can be \"fishers of men\" in our own lives and prioritize spiritual nourishment through God\’s word.",
        imgFile: "images/Bible08s.webp"
    },
    {
        title: "New Testament Title Page",
        date: "2024-5-15",
        book: "Bible",
        reference: "New Testament",
        blurb: "I ordered some cute stickers online. I tried to find ones that were religious and featured scriptures or pictures of angels and flowers. I adore these. I enjoyed looking through them with my daughters. We particulary were amused by this one of a child riding a bird. My daughter Eva thought this one that says 'Girl, read your bible' was funny. I thought it was a good reminder. I really love how this hobby allows me to play and celebrate by scriptures. It's a joy to pick them up and look through them and return to them every day.",
        imgFile: "images/Bible09s.webp"
    },
    {
        title: "Old Testament title page",
        date: "2024-8-24",
        book: "Bible",
        reference: "Old Testament title page",
        blurb: "Another fun title page with stickers. The one with blue background reminds me of my daughter Alissa when she was a toddler. My goodness she had the cutest big eyes. The two angels reminded my of my two daughters a little bit.",
        imgFile: "images/Bible10s.webp"
    },
    {
        title: "The New Testament",
        date: "2024-10-10",
        book: "Bible",
        reference: "New Testament title page",
        blurb: "The other day there was a lady who was online selling these really old decorative bible verse prints. They were lovely. Her grandmother collected them. She bought them from collection baskets at her church over the years. They were quite old, between the 1930's to the 1960's. She had about 15 of them. I contemplated for a moment of buying them and putting them in my scriptures as tips ins and discovered she wanted $1000 for them. Way to steep for me. They did sell quickly so somebody has money. I had an idea to look up vintage bible verse prints in a google images search and I was delighted to find many. So I edited them in photoshop and printed many out for tips ins for my bible. I love them. This one is one of my favorites.",
        imgFile: "images/Bible11s.webp"
    },
    {
        title: "Choose you this day whom ye will serve",
        date: "2024-8-14",
        book: "Bible",
        reference: "Joshua 24:15",
        blurb: "Everytime I hear this verse I am reminded of a two part young I sang in Young Women's. It was probably from the song book called, I walk by faith by Janis Kap Perry. My husband said they had a sign above their front door quoting this scripture all growing up. I did a crossstitch of it as well as a teenager, although I have no clue whatever happened to it.  I had a cute house sticker and I remembered this verse.",
        imgFile: "images/Bible12s.webp"
    },
    {
        title: "The book of Psalms",
        date: "2024-10-26",
        book: "Bible",
        reference: "Psalms",
        blurb: "I have learned to have a bigger appreciation for the book of Psalms this year. I decided to read through them this year and I discovered the Savior quoted the psalms many times. I also discovered that the psalms come in different categories. I started labeling them by category. My favorite category of psalm this year is trust. When things have been stressful, I have tried to remember many of the comforting psalms that promise of God's eternal care for us. One of my current favorites is 121.  I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the Lord, which made heaven and earth. He will not suffer thy foot to be moved: he that keepeth thee will not slumber. Behold, he that keepeth Israel shall neither slumber nor sleep. The Lord is thy keeper: the Lord is thy shade upon thy right hand. The sun shall not smite thee by day, nor the moon by night. The Lord shall preserve thee from all evil: he shall preserve thy soul. The Lord shall preserve thy going out and thy coming in from this time forth, and even for evermore.",
        imgFile: "images/Bible13s.webp"
    },
    {
        title: "The Book of Mormon",
        date: "2024-10-9",
        book: "Mormon",
        reference: "Book of Mormon title page",
        blurb: "Much like my other title pages I had a blast finding my favorite stickers and having fun. ",
        imgFile: "images/BOM01.webp"
    },
    {
        title: "I know not for what purpose",
        date: "2024-11-2",
        book: "Mormon",
        reference: "1 Nephi 9:5-6",
        blurb: "I had fun with this one. I always have been fascinated by this scripture where Nephi admits hes writing stuff that his father has already recorded and he had no idea why. Then even this part was retained even after Mormon abridges the scriptures. After the 116 pages were lost and we no longer had the book of Lehi, we still had much was what the book of Lehi contained. I thought this file not found sticker was clever. I get a kick out of seeing it everything I get to this part.",
        imgFile: "images/BOM02l.webp"
    },
    {
        title: "Watch your thoughts",
        date: "2024-9-18",
        book: "Mormon",
        reference: "Mosiah 4: 30",
        blurb: "In the Book of Mormon, Mosiah 4:30 serves as a powerful reminder to be mindful of our actions, thoughts, and words. King Benjamin, speaking to his people, urges them to “watch yourselves” and be aware of how we live our daily lives. He warns that even the smallest of our actions can have a lasting impact, whether positive or negative. He says, “But this much I can tell you, that when you look upon the scriptures, you will find that it is all for your benefit.” This reminder calls us to consciously examine our behavior in light of our beliefs and to strive to live with purpose. The verse reminds us that it\’s not just about big decisions but also about the small, everyday choices that shape our character. As we go about our lives, we are encouraged to remember the teachings of Christ, keeping our hearts pure and aligning our actions with His will. By doing so, we can experience peace and joy that comes from living according to divine principles. In our scripture journaling, let this verse inspire us to reflect on the deeper meanings of our daily actions and to set meaningful goals that reflect the love and teachings of Christ.",
        imgFile: "images/BOM03l.webp"
    },
    {
        title: "Destruction",
        date: "2024-11-22",
        book: "Mormon",
        reference: "3 Nephi 8",
        blurb: "In 3 Nephi 8, we read about a period of intense destruction that shook the Nephite civilization. The chapter describes catastrophic natural disasters—earthquakes, storms, and fires—that brought devastation to cities and people. This destruction, which followed a period of great wickedness, serves as a powerful reminder of the consequences of turning away from God\’s commandments. The cities that were destroyed were once filled with pride, sin, and unbelief, and their downfall illustrates how spiritual decay often precedes physical ruin. The Lord\’s judgments are not to punish, but to bring people to repentance and realign them with His will. As we reflect on this chapter in our scripture journaling, it invites us to examine our own lives. Are there areas where we need to repent or turn back to God? Let us take the lessons of 3 Nephi 8 to heart and strive to build our lives on the solid foundation of faith and righteousness.",
        imgFile: "images/BOM04l.webp"
    },
    {
        title: "Darkness",
        date: "2024-11-22",
        book: "Mormon",
        reference: "3 Nephi 8",
        blurb: "In 3 Nephi 8, a \"vapor of darkness\" covers the land, symbolizing both physical and spiritual blindness. This thick, oppressive darkness follows a series of natural disasters and is described as something that \"did seal up the face of the whole earth.\" The darkness represents the consequences of wickedness and the loss of God's guiding light. As we reflect on this scripture in our journaling, it challenges us to consider areas of our own lives where we might be walking in darkness. Are we seeking the light of Christ in all things?",
        imgFile: "images/BOM05l.webp"
    },
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
                    <img class="image" src="${obj.imgFile}" alt="${obj.title} - ${obj.reference}" loading="lazy">
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

document.addEventListener("DOMContentLoaded", function() {
    renderBlog(posts);
});


