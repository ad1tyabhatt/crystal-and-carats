const carouselItems = document.querySelectorAll(".carousel-item");
document.querySelector(".carousel-item:first-child .carousel-caption").classList.add("animate-in");

carouselItems.forEach((item)=>{
    item.addEventListener('transitionend',(e)=>{
        if(e.target.classList.contains('active')){
            const caption = e.target.querySelector(".carousel-caption");
            if(caption){
                caption.classList.add("animate-in");
            }else{
                const caption = e.target.querySelector('.carousel-caption')
                if(caption){
                    caption.classList.remove('animate-in')
                }
            }
        }
    })
})