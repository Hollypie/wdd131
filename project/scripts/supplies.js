const supplyList = [
    {
        name: "My Scriptures",
        url: "https://www.deseretbook.com/product/5219867.html?cgid=content-books-churchres-scptrjrnl",
        imgFile: "images/supplies/supply1.webp",
        blurb: "I adore my scriptures. These can be found a Deseret Book or deseretbook.com. There are a ton of beautiful journaling bibles on the market but I really wanted a set with all the cross reference footnotes for the LDS standard works.  I especially adored the green old testament but after owning them for a couple years, I love my pink book of Mormon. Deseret Book has many cute options for journaling scriptures now. It's so hard to choose among them."
    },
    {
        name: "Bible tabs",
        url: "https://mrpen.com/products/mr-pen-bible-tabs-75-tabs-boho-theme-laminated-bible-tabs-for-women-and-men",
        imgFile: "images/supplies/supply2.webp",
        blurb: "I discovered Mr pen brand while watching bible journaling youtube videos. I have bought two of their products and so far really like their stuff.  These tabs are not perfect however. They don't stay in place. They are made to be repositionable and they are, kinda like a post-it note but because of that they can fall off or pop open. I really have enjoyed the reposition ability because I made a couple mistakes while installing them and being able to fix them was great. I discovered that I could use glue stick to permanenty stick them to the pages if I find one that keeps falling off and that seems to work. Mr Pen has a ton of cute colors and styles. I have the Boho colors. I wish I could find some tabs for my book of Mormon and D&C. That's gonna be more of a specialty item so they are going to be harder to find."
    },
    {
        name: "Mr Pen post-it notes Set",
        url: "https://mrpen.com/products/mr-pen-sticky-note-set-410-pack-pastel-colors-sticky-notes-tabs-divider-sticky-notes",
        imgFile: "images/supplies/supply3.webp",
        blurb: "Soon after I bought the bible tabs I saw an cute ad featuring this post-it note set and I had to have it. I got the vintage colors but kinda wish I had gotten the candy colors or pastels. The vintage are darker in person than they look in pictures. This set is cool. Pen that comes with it is amazing for writing on the slick transparent post-it surface. I had assumed that it would smear or that I would need to let it dry because the pen was so juicy but it's perfectly dry almost immediately. It was totally surprizing. The pen is not good on the scripture pages themselves as it bleeds like mad because it's so juicy. This little set is so fun. I love choosing the right note for the right spot."
    },
    {
        name: "Zebra MildLiner Creative Markers",
        url: "https://www.amazon.com/Zebra-Pen-Mildliner-Highlighter-Assorted/dp/B0752WWCTN/ref=sr_1_5?crid=14AVESN6XJ4KO&dib=eyJ2IjoiMSJ9.jU_ybwRBvVnPlDbilrLx41VStfI-Bjnc4OM1y_2xkwQ_yUJcYZfHTWWLbgenOcRwx-nbUQVNgd_G40xvQPEz2NJFNKLC4vDh4G_p84SmmMElBgbROuU9SMqiKel2a5NjdZzrXVVEEKo06MJ4s_4gWrFio8jLGeZvrlzhb3xxm4SbrMr2jhQWheqZ1vp8pNkf32a4Gl_McOEVMYPtzGP29KQfOvEkBBaREywizgrNWIo8Vh4zak1tNdQS0rQwxMVxxe2fE16m5vDmGDG-KCufvkm2TsMCzMRQv2wufk98VJA.57Yb6QpdnrGdSWElKlM9_G_gYUJHdRAkiycClXkb2Fc&dib_tag=se&keywords=mildliner%2Bhighlighters&qid=1733936303&sprefix=mildli%2Caps%2C149&sr=8-5&th=1",
        imgFile: "images/supplies/supply4.webp",
        blurb: "These are simply the best. They come in pretty soft colors and the don't bleed through the pages, or at least they don't bleed through mine. I also love the double sided feature. I like the smaller end for underlining and the chisel for highlighting entire areas. I used to use color pencils to do my color code system and now I am addicted to these. The are so much faster and more convienient to use than the color pencils. I recently ran out of ink in two of these markers and I've bought a similar style set for half the price from Mr Pen, we will see if the cheaper replacements work as well as these. They are pricy but so far they have been worth it."
    },
    {
        name: "Faber Castell Colored Pencils",
        url: "https://www.amazon.com/Castell-F110012-Polychromos-Colour-Pencils/dp/B0007OECJY/ref=sr_1_1?crid=1GOX2PFYI38JY&dib=eyJ2IjoiMSJ9.k3qtNHrG8tCiFXUX6PFt_F50ZL1E96ik5XjH_xQ1tR4pTNHoP9I12mulkLAL4EuQUNCmEBDLZiZ2i6dYU2LNArxRcqiNTu0Q8JcMK9gtfZG0hxUYXnTvNPrPfXE060ddy-t-nNm3ySNaQqHN33AvedpmYtkMi_FtdqsPpZFdSnM_mNz8hMDSRmdHHVEiuGR5rAL9oZuZ7MJoThx1MS5H5wNqg6jJ1xy061jmOfg7JajMQQSIXB5gOHf8u_NzAZYY0X_Sh8ai4PZXcq3l46UyURsNax7OhXWrkxVQ_jbfj8o.GRkieQCrWQg2xIj1p0jpSrHhw1UFO1al6ZESG660MPI&dib_tag=se&keywords=faber+castell+colored+pencils+12&qid=1733936406&sprefix=faber+castell+colored+pencils+12%2Caps%2C133&sr=8-1",
        imgFile: "images/supplies/supply5.webp",
        blurb: "These are super expensive, unnecessary colored pencils but I love them. If you are on a budget buy some crayola colored pencils. Seriously, Crayola makes some great stuff. Stay away from Rose art and Crazy art, those cost almost as much and are crap. These are ten times the cost of crayola. I do art as a hobby and sometimes get paid to do commissions and when I do I really need the colors to be lightfast. Meaning that the colors won't fade over time. If it makes you sad to think of opening your scriptures and all your colored pencil marks are faded and less vibrant, than these might be a good choice for you. One of my favorite color pencils are prismacolor colored pencils, they are amazing but those are so creamy that they transfer and smudge too much for me to want to use them in my scriptures.I use these because I already had them for other purposes. "
    },

];

function renderSupplyList(array) {
    const blog = document.querySelector('.supplies');
    blog.innerHTML = '';

    array.forEach(obj => {
        const div = document.createElement('div');
        div.classList.add('blog-div');
        
        div.innerHTML = `
            <div class="blogCard">
                <div class="blogPost">
                    <div class="title"><h3 class="titlep">${obj.name}</h3></div>
                    <div class="productURL"><h4 class="productURLp"><a href="${obj.url}" class="productLink">Link to Product<a></h4></div>
                    <div class="blurb"><p class="blurbp">${obj.blurb}</p></div>
                </div>      
                <div class="blogPhoto">
                    <img class="image" src="${obj.imgFile}" alt="image feature ${obj.title}" loading="lazy">
                </div>
            </div>
            <br>`;
        
        blog.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    renderSupplyList(supplyList);
});
