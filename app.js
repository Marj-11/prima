const list = document.querySelectorAll('.listChild');
console.log(window.location.href);

if (window.location.href === `${window.origin}/prima/`) {
    list[0].classList.add('white');
}
if (window.location.href === `${window.origin}/prima/gallerie/`) {
    list[1].classList.add('white');
}
if (window.location.href === `${window.origin}/prima/termine/`) {
    list[2].classList.add('white');
}
if (window.location.href === `${window.origin}/prima/uber/`) {
    list[3].classList.add('white');
}
if (window.location.href === `${window.origin}/prima/kontakt/`) {
    list[4].classList.add('white');
}
const burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
    burger.classList.toggle('open');
});