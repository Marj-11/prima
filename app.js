const list = document.querySelectorAll('.listChild');

if (window.location.href === `${window.origin}/home/`) {
    list[0].classList.add('white');
}
if (window.location.href === `${window.origin}/gallerie/`) {
    list[1].classList.add('white');
}
if (window.location.href === `${window.origin}/termine/`) {
    list[2].classList.add('white');
}
if (window.location.href === `${window.origin}/uber/`) {
    list[3].classList.add('white');
}
if (window.location.href === `${window.origin}/kontakt/`) {
    list[4].classList.add('white');
}
const burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
    burger.classList.toggle('open');
});