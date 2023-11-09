# Simple JavaScript Digital Clock

<h1 style="color: crimson;">HTML Code</h1>
```
<p>
    <span class="hours">00</span>
    <span class="dots">:</span>
    <span class="minutes">00</span>
    <span class="dots">:</span>
    <span class="seconds">00</span>
</p>
``` 
<h1 style="color: crimson;">JavaScript Code</h1>

```
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");


setInterval(() => {
    let time = new Date();
    if(time.getHours() < 10) {
        hours.innerHTML = "0" + time.getHours();
    } else {
        hours.innerHTML = time.getHours();
    }
    minutes.innerHTML = time.getMinutes();
    seconds.innerHTML = time.getSeconds();
}, 1000);

```
