var signupBtn = document.querySelector('.signup-btn');
var signinBtn = document.querySelector('.signin-btn');

signupBtn.addEventListener('click', function() {
  alert('Sign Up button clicked!');
});

signinBtn.addEventListener('click', function() {
  alert('Log in button clicked!');
});
	 let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 5 seconds
}
//service
