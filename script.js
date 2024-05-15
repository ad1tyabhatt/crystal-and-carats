
const signUp = document.querySelector(".signUp");
const closeBtn = document.querySelector(".close-btn");
setTimeout(function () {
  signUp.style.display = "flex";
}, 2000);

closeBtn.addEventListener("click", (e) => {
  console.log("close btn");
  signUp.style.display = "none";
});

	// Access the Images
	let slideImages = document.querySelectorAll('.slide-image');
	// Access the next and prev buttons
	let next = document.querySelector('.next');
	let prev = document.querySelector('.prev');
	// Access the indicators  
	var counter = 0;
  
	function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length-1){
      counter = 0;
    }
    else{
      counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
	}
	// Auto slideing
	function autoSliding(){
    setInterval(timer, 1000);
		function timer(){
      slideNext();
      console.log(slideImages)
		}
	}
	autoSliding();



  // Login Btn

  const login = document.querySelector('.btn-login')
  

  login.addEventListener('click',()=>{

  })
