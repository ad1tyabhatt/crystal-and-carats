//sidebar
function showSidebar(){
  const showSide = document.querySelector('.left-nav-hidden')
  showSide.style.display = 'flex';
}

function hideSidebar(){
  const hideSidebar = document.querySelector('.left-nav-hidden')
  hideSidebar.style.display='none'
}


const signUp = document.querySelector(".signUp");
const closeBtn = document.querySelector(".close-btn");
setTimeout(function () {
  signUp.style.display = "flex";
}, 2000);

closeBtn.addEventListener("click", (e) => {
  console.log("close btn");
  signUp.style.display = "none";
});

window.onkeydown = function( event ) {
  if ( event.keyCode == 27 ) {
    signUp.style.display = "none";
  }
};

const signUpBtn = document.getElementById('signUp-btn')
const signInBtn = document.getElementById('signIn-btn')
const getForm = document.getElementById('form');
const signUpMsg = document.getElementById('sign-up-message')
const getSignInForm = document.getElementById('signInForm'); 
const getForgetPasswordContainer = document.getElementById('forget-password-container')
const getForgotPassBtn = document.getElementById('forgotPassBtn')
const resetPassContainer = document.getElementById('reset-password')
const getResetPassbtn = document.getElementById('reset-password-btn')
const getNewPassCont = document.getElementById('enter-new-password-container')
const getNewPassBtn = document.getElementById('reset-password-confirm')

signInBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  getForm.style.display= 'none';
  signUpMsg.style.display= 'none';
  getSignInForm.style.display='block'
  getForgetPasswordContainer.style.display = 'none'
  getNewPassCont.style.display = 'none'
})

signUpBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  getForm.style.display = 'block'
  signUpMsg.style.display = 'block'
  getSignInForm.style.display = 'none'
  getNewPassCont.style.display = 'none'
})

getForgotPassBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  getForgetPasswordContainer.style.display='block'
  getSignInForm.style.display = 'none'
  getNewPassCont.style.display = 'none'
})

getResetPassbtn.addEventListener('click',(e)=>{
  e.preventDefault()
  getSignInForm.style.display = 'none';
  resetPassContainer.style.display = 'block'
  getForgetPasswordContainer.style.display='none'
  getNewPassCont.style.display = 'none'
})

getNewPassBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  resetPassContainer.style.display = 'none'
  getNewPassCont.style.display='block'
})

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
