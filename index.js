
const form = document.querySelector("#userForm");
const users = document.querySelector("#users");  

const handleSubmit = function(ev){
    ev.preventDefault()
    const f = ev.target;  
    
    
        const userName = f.userName.value;
        const age = f.age.value;
        const favoritecolor = f.favoritecolor.value;
    
    users.appendChild(renderList(userName, age, favoritecolor));

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

function renderListItem(){  
    const nameItem = document.createElement('li'); 
    const ageItem = document.createElement('li'); 
    const colorItem = document.createElement('li');
    nameItem.textContent = `Name: ${arguments[0]}`; 
    ageItem.textContent = `Age: ${arguments[1]}`; 
    colorItem.textContent = `Favorite Color: `;
    colorItem.appendChild(renderColor(arguments[2]));  
    
    return [nameItem, ageItem, colorItem]; 
                                                                            
}



function renderList(data){
    const list = document.createElement('ul');
    const items = renderListItem(arguments[0], arguments[1], arguments[2]);

    list.appendChild(items[0]);  
    list.appendChild(items[1]); 
    list.appendChild(items[2]); 
    
    return list;
}

form.addEventListener("submit", handleSubmit)