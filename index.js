
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
    colorItem.textContent = `Favorite Color: `;
    colorItem.appendChild(renderColor(favoritecolor));
    list.appendChild(colorItem);
    
    const users = document.querySelector("#users");
    users.appendChild(list);

    f.reset();
    f.userName.focus();
}

function renderColor(favoritecolor){
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = favoritecolor;
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv;
}

//function renderListItem(){
  //  const nameItem = document.createElement('li');
    //const ageItem = document.createElement('li');
    //const colorItem = document.createElement('li');
    //nameItem.textContent = `Name: ${arguments[0]}`
    //ageItem.textContent = `Age: ${arguments[1]}`

//}


form.addEventListener("submit", handleSubmit)