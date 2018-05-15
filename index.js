const button = document.querySelector("button.greeting")
const heading2 = document.querySelector("h1.heading2")
const heading1 = document.querySelector("h1.heading1");
function changeText(){
    heading2.textContent='Button has been Clicked to change heading 2'; 
}

function textInput(form){
    const input = form.userInput.value;
    heading1.textContent=input;
}

button.addEventListener("click", changeText)
