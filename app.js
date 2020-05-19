const list = document.querySelectorAll('.listChild');

if (window.location.href === `${window.origin}/prima/index.html`) {
    list[0].classList.add('white');
}
if (window.location.href === `${window.origin}/prima/gallerie.html`) {
    list[1].classList.add('white');
}
if (window.location.href === `${window.origin}/prima/termine.html`) {
    list[2].classList.add('white');
}
if (window.location.href === `${window.origin}/prima/%C3%BCber_uns.html`) {
    list[3].classList.add('white');
}
if (window.location.href === `${window.origin}/prima/kontakt.html`) {
    list[4].classList.add('white');
}
const burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
    burger.classList.toggle('open');
});