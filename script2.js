
let button = document.querySelector(".button");
let input = document.querySelector(".input");
let addInfo = document.querySelector(".addInfo");

let NameDiv = document.querySelector(".Name");
let LastNameDiv = document.querySelector(".LastName");
let ageDiv = document.querySelector(".age");

let Name, LastName, age, user1;

button.addEventListener("click", function () {
    let dateUser = input.value;
    let newArr = dateUser.split(" ");
    [Name, LastName] = newArr;
    user1 = new user1(Name, LastName);
    input.value = "";
});

addInfo.addEventListener("click", function () {
    NameDiv.textContent = user1.Name;
    LastNameDiv.textContent = user1.LastName;
    ageDiv.textContent = user1.age;
});

function User(Name, LastName) {
    this.Name = Name;
    this.LastName = LastName;
    this.age = 19;
}