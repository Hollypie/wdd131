const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const navLinks = document.querySelectorAll('.navigation a');

navLinks.forEach(link => {
    link.addEventListerner('click', () => {
        navLinks.forEack(link => link.classList.remove('active'));

        link.classList.add('active');
    });
});
