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

