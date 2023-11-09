# Random User Generator

***

## HTML Code

``` html
<section>
        <div class="card">
            <div class="image-section">
                <img class="image" src="https://robohash.org/hicveldicta.png" alt="user image">
            </div>
            <p class="user-name">Name</p>
            <p class="user-age">age: 12</p>
            <p class="user-gender">gender</p>
            <p class="user-email">E-mail</p>
        </div>
        <button type="button" class="button">Random User</button>
    </section>
```


## JavaScript Code
``` js
import {users} from './data.js';
let allUsers = [...users.users];
let button = document.querySelector(".button");
let image = document.querySelector(".image")
let name = document.querySelector(".user-name");
let age = document.querySelector(".user-age");
let gender = document.querySelector(".user-gender");
let email = document.querySelector(".user-email");

button.addEventListener("click", function() {
    let randomUser = Math.ceil(Math.random() * allUsers.length) + 1;
    let currentUser = allUsers[randomUser];
    image.src = `${currentUser.image}`;
    name.innerHTML = currentUser.firstName + " " + currentUser.lastName;
    age.innerHTML = "Age: " + currentUser.age;
    gender.innerHTML = "Gender: " + currentUser.gender;
    email.innerHTML = currentUser.email;
});
```
