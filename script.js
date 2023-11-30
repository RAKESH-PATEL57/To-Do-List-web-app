let userInput = document.querySelector("#user-input");
let addBtn = document.querySelector('.btn');
let userContents = document.querySelector('.list');
let searchSec = document.querySelector("#form");
let clrBtn = document.querySelector("#clear");

addBtn.onclick = () =>{
    let userValue = userInput.value;
    
    if(userValue == '')
    {
        alert('Please enter your content');
    }

    else
    {
        searchSec.style.top="10%";
        const box = document.createElement("li");
        box.id = '#newContent';
        box.href = `#${userValue}`;
        box.innerText = userValue;
        userContents.appendChild(box);
    }
}

clrBtn.onclick = () => {
    userContents.innerHTML = '';
    // alert('click');
} 



