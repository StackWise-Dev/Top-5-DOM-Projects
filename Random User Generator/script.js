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





