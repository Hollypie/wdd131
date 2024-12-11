const quotes = [

    '"In this Church there is an enormous amount of room — and scriptural commandment — for studying and learning, for comparing and considering, for discussion and awaiting further revelation. We all learn “line upon line, precept upon precept”, with the goal being authentic religious faith informing genuine Christlike living." - Jeffrey R. Holland', 
    '“Your education should include spiritual learning. Study the scriptures and the words of the latter-day prophets. Participate in seminary and institute. Continue throughout your life to learn about Heavenly Father\’s plan. This spiritual learning will help you find answers to the challenges of life and will invite the companionship of the Holy Ghost.” - For the Strength of Youth', 
    '“The study of the doctrines of the gospel will improve behavior quicker than a study of behavior will improve behavior.” - Boyd K. Packer', 
    '“Someone once asked me, \‘Don\’t you think the commandments should be rewritten?" The answer was, "No, they should be reread.” - Richard L. Evans',
    '“If the Atonement is the foundation of our faith (and it is), then no one should be content with a casual acquaintance of this doctrine. Instead, the Atonement should be paramount in our intellectual and spiritual pursuits.” - Tad R. Callister',
    '“Search the scriptures—search the revelations which we publish, and ask your Heavenly Father, in the name of His Son Jesus Christ, to manifest the truth unto you, and if you do it with an eye single to His glory nothing doubting, He will answer you by the power of His Holy Spirit. You will then know for yourselves and not for another. You will not then be dependent on man for the knowledge of God; nor will there be any room for speculation. No; for when men receive their instruction from Him that made them, they know how He will save them” - Joseph Smith, Jr.',
    '“Before we can write the gospel in our own book of life we must learn the gospel as it is written in the books of scripture. The Bible, the Book of Mormon, and the Doctrine and Covenants [and the Pearl of Great Price]—each of them individually and all of them collectively—contain the fulness of the everlasting gospel.” - Bruce R. McConkie',
    'As you use your agency to carve out time every day to draw close to God’s voice, especially in the Book of Mormon, over time His voice will become clearer and more familiar to you. - Michelle Craig',
    '“Let us not treat lightly the great things we have received from the hand of the Lord! His word is one of the most valuable gifts He has given us. I urge you to recommit yourselves to a study of the scriptures. Immerse yourselves in them daily so you will have the power of the Spirit to attend you in your callings. Read them in your families and teach your children to love and treasure them” - Ezra Taft Benson',
    '“I think that people who study the scriptures get a dimension to their life that nobody else gets and that can\'t be gained in any way except by studying the scriptures,” -Elder Bruce R. McConkie',
    '“I fear that many of us rush about from day to day taking for granted the holy scriptures. We scramble to honor appointments with physicians, lawyers, and businessmen. Yet we think nothing of postponing interviews with Deity, postponing scripture study. Little wonder we develop anemic souls and lose our direction in living. How much better it would be if we planned and held sacred fifteen or twenty minutes a day for reading the scriptures. Such interviews with Deity would help us recognize his voice and enable us to receive guidance in all of our affairs.” - Carlos E. Asay',
    '“When I think of the Book of Mormon, I think of the word power. The truths of the Book of Mormon have the power to heal, comfort, restore, succor, strengthen, console, and cheer our souls. “My dear brothers and sisters, I promise that as you prayerfully study the Book of Mormon every day, you will make better decisions—every day. I promise that as you ponder what you study, the windows of heaven will open, and you will receive answers to your own questions and direction for your own life. I promise that as you daily immerse yourself in the Book of Mormon, you can be immunized against the evils of the day, even the gripping plague of pornography and other mind-numbing addictions.” - Russell M. Nelson',
    '“We talk to God through prayer. He most often communicates back to us through his written word.” - Richard G. Scott',
    '"Satan’s lie that you don’t have time to study the scriptures. Choose to take time to study them. Feasting on the word of God each day is more important than sleep, school, work, television shows, video games or social media. You may need to reorganize your priorities to provide time for the study of the word of God. If so, do it." Richard G. Scott',
    '"You cannot have adequate faith in a Christ you do not adequately know." - Neal A. Maxwell',
    '“The things of God are of deep import, and time, and experience, and careful, and solemn, and ponderous thoughts can only find them out.” - Joseph Smith, Jr.',
    '“When God speaks to the people, he does it in a manner to suit their circumstances and capacities…Should the Lord Almighty send an angel to re-write the Bible, it would in many places be very different from what it now is. And I will even venture to say that if the Book of Mormon were now to be re-written, in many instances it would materially differ from the present translation. According as people are willing to receive the things of God, so the heavens send forth their blessings.” - Brigham Young'

];


function renderRandomQuote(stringArray) {

    let randomIndex = Math.floor(Math.random() * quotes.length);

    const quote = document.querySelector('.quote');
    quote.innerHTML = quotes[randomIndex];

}

document.addEventListener("DOMContentLoaded", function() {
    renderRandomQuote();
});