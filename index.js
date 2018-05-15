//const button = document.querySelector("button.greeting")
//const heading2 = document.querySelector("h1.heading2")
//const heading1 = document.querySelector("h1.heading1");
//const form = document.querySelector("#userForm");


//function changeText(){
//    heading2.textContent='Button has been Clicked to change heading 2'; 
//}

//function textInput(){
 //   const textBox = document.querySelector("input.userInput").value
 //   heading1.textContent=textBox;
//}


//form.addEventListener("submit", changeText)

const form = document.querySelector("#userForm");

const handleSubmit = function(ev){
    ev.preventDefault()
    const heading = document.querySelector("h1");
    const f = ev.target;
    const userName = f.userName.value;
    heading.textContent = userName;


}

form.addEventListener("submit", handleSubmit)