let main_image = document.querySelector(".main-image > img");
let thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function(e) {
        thumbnails.forEach(t => {
            t.classList.remove("active");
        });

        main_image.style.transform = "scale(0.8)";
        thumbnail.classList.add("active");
        
        setTimeout(() => {
            main_image.src = e.target.src;
            main_image.style.transform = "scale(1)";
        }, 300);
    });
});

