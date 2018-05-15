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
    
    const f = ev.target;
    const userName = f.userName.value;
    const age = f.age.value;

    const favoritecolor = f.favoritecolor.value;
    
    const list = document.createElement('ul');

    const nameItem = document.createElement('li');
    nameItem.textContent = `Name: ${userName}`
    list.appendChild(nameItem);

    const ageItem = document.createElement('li');
    ageItem.textContent = `Age: ${age}`
    list.appendChild(ageItem);

    const colorItem = document.createElement('li');
    const colorDiv = document.createElement('div');
    colorItem.textContent = `Favorite Color: `;
    colorDiv.style.backgroundColor = favoritecolor;
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    colorItem.appendChild(colorDiv);
    list.appendChild(colorItem);
    

    const users = document.querySelector("#users");
    users.appendChild(list);

    f.reset();
    f.userName.focus();
}

form.addEventListener("submit", handleSubmit)