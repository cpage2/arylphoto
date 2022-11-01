// Light mode
// on load make background black

let colorBTN = document.querySelector('#modeB');
let modeSpan = document.querySelector('#mode');
let bd  = document.body; 
let menuBG = document.querySelector('.sideMenu .container-md')




let mC = function modeChanger(){
  
   bd.classList.toggle("lightMode");

   if(modeSpan.innerHTML === "Light Mode"){
      modeSpan.innerHTML = "Dark Mode";
      menuBG.style.backgroundColor = 'rgb(232,232,232)';
    
      
      

   }else{
    modeSpan.innerHTML = "Light Mode";
    menuBG.style.backgroundColor = 'rgb(38, 38, 38)'
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