// initialize tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


// function for reloading the designated webpages when click the nav buttons at the right side of the web page
const itemElement = document.getElementById('navbar-items');

function onClick(e) {
 
  for (let i=0; i <= (itemElement.childNodes.length); i++) {

      if (e.target.parentElement.classList.contains('item1')) {
          window.location.href = 'tokyo-page.html';
      } else if (e.target.parentElement.classList.contains('item2')) {
        window.location.href = 'london-page.html';
      } else if (e.target.parentElement.classList.contains('item3')) {
        window.location.href = 'new-york-page.html';
      } else {
          e.target.parentElement.classList.contains('item4');
          window.location.href = 'egypt-page.html';
      }
      }
}
itemElement.addEventListener('click', onClick);




 












