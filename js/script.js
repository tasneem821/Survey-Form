

let SubmitButton = document.getElementById('submit')
SubmitButton.addEventListener("click", show);
let answer = document.getElementById('answer')
answer.style.padding=0;
function show(){
    let UserName = document.getElementById("user-name")
let UserAge = document.getElementById('user-age')
let UserHobby = document.getElementById('user-hobby')
const name = UserName.value;
const age = UserAge.value;
const hobby = UserHobby.value;
answer.style.padding="30px"
    answer.innerHTML = `Welcome ${name} You are ${age} years old, and your favorite
hobby is ${hobby}`;

event.preventDefault();
}
