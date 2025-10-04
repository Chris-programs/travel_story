// function for photo gallery
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active')});
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}

const backbtn = document.getElementById('back-btn');

function onClick() {
  window.location.href = 'homepage.html';
}

backbtn.addEventListener('click', onClick);
