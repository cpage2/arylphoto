// Light mode
// on load make background black

let colorBTN = document.querySelector('#modeB');
let modeSpan = document.querySelector('#mode');
let bd  = document.body; 
let menuBG = document.querySelector('.sideMenu .container-md')
let linkColor = document.querySelectorAll('#mItem');
let logoA = document.querySelector('#logoA');
let logoB = document.querySelector('#logoB');
let line  = document.querySelector('.line');
let smIcons = document.querySelectorAll('i');
let paragraph = document.querySelectorAll('p');
let contactTitle = document.querySelector('h2');
let subButton = document.querySelector('#subButton');
let subText = document.querySelector('#subText');

const darkGray = 'rgb(38,38,38)';
const offWhite = 'rgb(216,216,216)';




let mC = function modeChanger(){
  
   bd.classList.toggle("lightMode");//Toggles background

   if(modeSpan.innerHTML === "Light Mode"){//While already in dark mode and span text in button is Light Mode
      modeSpan.innerHTML = "Dark Mode";
      menuBG.style.backgroundColor = 'rgb(232,232,232)';
      logoA.style.color = darkGray;
      logoB.style.color = darkGray;
      line.style.background = darkGray;
      linkColor.forEach(item => item.style.color = darkGray);

      linkColor.forEach(item => item.addEventListener('mouseover', function handleMouseOver(){
        item.style.color = 'rgb(196,196,196)';
      }))

      linkColor.forEach(item => item.addEventListener('mouseout', function handleMouseOut(){
        item.style.color = darkGray;
      }))
      
      smIcons.forEach(item => item.style.color = darkGray);
      paragraph.forEach(item => item.style.color = darkGray);
      contactTitle.style.color = darkGray;

      subButton.className = 'btn btn-dark btn-sm';
       
   

   }else{//When already in light mode
    modeSpan.innerHTML = "Light Mode";
    menuBG.style.backgroundColor = darkGray;
    logoA.style.color =offWhite;
      logoB.style.color = offWhite;
      line.style.background = offWhite;
      linkColor.forEach(item => item.style.color = offWhite);
      linkColor.forEach(item => item.addEventListener('mouseover', function handleMouseOver(){
        item.style.color = 'rgb(144,144,144)';
      }))
      linkColor.forEach(item => item.addEventListener('mouseout', function handleMouseOut(){
        item.style.color = offWhite;
      }))
      smIcons.forEach(item => item.style.color = offWhite);

      paragraph.forEach(item => item.style.color = offWhite);
      contactTitle.style.color = offWhite;
      subButton.className = 'btn btn-light btn-sm';
      
      
   }
  

}

//Mode Button event
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