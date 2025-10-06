// initialize tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


// function for reloading the designated webpages when click the nav buttons at the right side of the web page

const itemElements = document.querySelectorAll('.nav-link');

itemElements.forEach(itemElement => { 
    
  itemElement.addEventListener('click', (e) => {

    console.log(e.target.textContent);


    if (e.target.textContent === 'Tokyo') {
        window.location.href = 'tokyo-page.html';
    } else if (e.target.textContent === 'London') {
        window.location.href = 'london-page.html';
    } else if (e.target.textContent === 'New York') {
        window.location.href = 'new-york-page.html';
    } else {
      (e.target.textContent === 'Egypt');
      window.location.href = 'egypt-page.html';
    }

    });
      
  });



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


// function for back to home page
const backbtn = document.getElementById('back-btn');

  backbtn.addEventListener('click', (e) => {
    window.location.href = 'homepage.html';
  });

// backbtn.addEventListener('click', pageOnClick);



