var images = document.querySelectorAll(".slider-imgs .img-slider");
var lastIndex = 0;

images.forEach((value,index)=>{

    let bullet = document.querySelectorAll(".bullets .bullet")[index];
    let bullets = document.querySelectorAll(".bullets .bullet");

    bullet.addEventListener("click", ()=>{

        let atualImage = images[index];

        images[lastIndex].classList.remove("visible");
        atualImage.classList.add("visible");

        bullets[lastIndex].classList.remove("active");
        bullet.classList.add("active");

        lastIndex = index;

    })

})
