<h1>Simple Slider</h1>
<br>
<br>
<br>
<h3>HTML Code</h3>
```
<section class="slider-section">
        <div class="main-image">
            <img src="./images/image1.jpg" alt="slider image">
        </div>
        <div class="thumbnails">
            <div class="thumb first-thumb">
                <img src="./images/image1.jpg" alt="slider image">
            </div>
            <div class="thumb second-thumb">
                <img src="./images/image2.jpg" alt="slider image">
            </div>
            <div class="thumb third-thumb">
                <img src="./images/image3.jpg" alt="slider image">
            </div>
            <div class="thumb fourth-thumb">
                <img src="./images/image4.jpg" alt="slider image">
            </div>
            <div class="thumb fifth-thumb">
                <img src="./images/image5.jpg" alt="slider image">
            </div>
        </div>
    </section>
```

<h3>JavaScript Code</h3>
```
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

```