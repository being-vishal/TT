//                     Dark Mode       

const toggleSwitch = document.querySelector('input[type = "checkbox"]');
const toggleIcon =  document.getElementById('toggle-icon');
//Switch Theme
function switchTheme(event){
   if(event.target.checked){
       document.documentElement.setAttribute('data-theme' , 'dark');
       toggleIcon.children[0].classList.replace('fa-sun' , 'fa-moon');
   }else{
    document.documentElement.setAttribute('data-theme' , 'light');
    toggleIcon.children[0].classList.replace('fa-moon','fa-sun');
   }
  
}
//Event listener
toggleSwitch.addEventListener('change' , switchTheme);



//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
