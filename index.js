const button = document.querySelector("button.greeting")
const heading = document.querySelector("h1.heading1")
function changeText(){
    heading.textContent='Button has been Clicked'; 
}
button.addEventListener("click", changeText)
