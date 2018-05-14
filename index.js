const button = document.querySelector("button.greeting")
const heading2 = document.querySelector("h1.heading2")
function changeText(){
    heading2.textContent='Button has been Clicked to change heading 2'; 
}
button.addEventListener("click", changeText)
