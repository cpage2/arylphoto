// Light mode
// on load make background black

let colorBTN = document.querySelector('#modeB');
let modeSpan = document.querySelector('#mode');
let bd  = document.body; 
let menuBG = document.querySelector('.sideMenu .container-md')
let linkColor = document.querySelectorAll('div.nav-item > a');
let logoA = document.querySelector('#logoA');
let logoB = document.querySelector('#logoB');
let line  = document.querySelector('.line');
let smIcons = document.querySelectorAll('div.sm-icons > i');
const darkGray = 'rgb(38,38,38)';
const offWhite = 'rgb(216,216,216)';




let mC = function modeChanger(){
  
   bd.classList.toggle("lightMode");

   if(modeSpan.innerHTML === "Light Mode"){//While already in dark mode
      modeSpan.innerHTML = "Dark Mode";
      menuBG.style.backgroundColor = 'rgb(232,232,232)';
      logoA.style.color = darkGray;
      logoB.style.color = darkGray;
      line.style.background = darkGray;
   
      
     

      
      

   }else{
    modeSpan.innerHTML = "Light Mode";
    menuBG.style.backgroundColor = darkGray;
    logoA.style.color =offWhite;
      logoB.style.color = offWhite;
      line.style.background = offWhite;
   }
  


}


  colorBTN.addEventListener('click', mC);
 
 
 


// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    // var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }