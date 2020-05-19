const list = document.querySelectorAll('.listChild');

if (window.location.href === `${window.origin}/prima/Home/`) {
    list[0].classList.add('white');
}
if (window.location.href === `${window.origin}/prima/Gallerie/`) {
    list[1].classList.add('white');
}
if (window.location.href === `${window.origin}/prima/Termine/`) {
    list[2].classList.add('white');
}
if (window.location.href === `${window.origin}/prima/Uber/`) {
    list[3].classList.add('white');
}
if (window.location.href === `${window.origin}/prima/Kontakt/`) {
    list[4].classList.add('white');
}
const burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
    burger.classList.toggle('open');
});