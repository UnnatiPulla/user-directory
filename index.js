const button = document.querySelector("button.greeting")
const heading2 = document.querySelector("h1.heading2")
const heading1 = document.querySelector("h1.heading1");

function changeText(){
    heading2.textContent='Button has been Clicked to change heading 2'; 
}

function textInput(){
    const textBox = document.querySelector("input.userInput").value
    heading1.textContent=textBox;
}

button.addEventListener("click", changeText)
