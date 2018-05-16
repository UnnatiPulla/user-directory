
const form = document.querySelector("#userForm");
const users = document.querySelector("#users");  

const handleSubmit = function(ev){
    ev.preventDefault()
    const f = ev.target;  
    
    const user = {
         'Name' : f.userName.value,
         'Age' : f.age.value,
         'Favorite Color' : renderColor(f.favoritecolor.value),
    }

    const list = renderList(user);
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

function renderListItem(label, value){  
    const item = document.createElement('li'); 
    const term = document.createElement('dt'); 
    term.textContent = label;
    const description = document.createElement('dd');
    try{
        description.appendChild(value);
    }catch(e){
        description.textContent+=value;
    }
    
    item.appendChild(term) 
    item.appendChild(description)
    return item;
                                                                            
}



function renderList(data){
    const list = document.createElement('dl');
    Object.keys(data).forEach(label => {
        const item = renderListItem(label, data[label])
        list.appendChilf(item);
    })
    return list;
}

form.addEventListener("submit", handleSubmit)