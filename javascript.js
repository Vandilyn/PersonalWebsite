// Sticky navbar
window.onscroll = function () {
  myFunction();
};

const navbar = document.getElementById('navbar');
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

//Go To
document.addEventListener('click', function (event) {
  if (!event.target.matches('.nav-link')) return;

  event.preventDefault();

  const element = document.getElementById(event.target.dataset.target);

  element.scrollIntoView({ behavior: 'smooth', block: 'end' });
});
