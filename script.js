let userInput = document.querySelector("#user-input");
let addBtn = document.querySelector('.btn');
let userContents = document.querySelector('.list');
let clrBtn = document.querySelector("#clear");
let ch = document.querySelector("#check");

addBtn.onclick = () =>{
    let userValue = userInput.value;
    
    if(userValue == '')
    {
        alert('Please enter your content');
    }

    else
    {
        let box = document.createElement("li");
        // box.id = '#newContent';
        // box.href = `#${userValue}`;
        box.innerHTML = userValue;
        userContents.appendChild(box);

        let span = document.createElement("span");
        span.innerHTML = "\xd7";
        box.appendChild(span);
    }

    userValue = "";
    saveData();
    
}



clrBtn.onclick = () => {
    userContents.innerHTML = '';
    // alert('click');
} 

userContents.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",userContents.innerHTML);
    console.log("rakesh");
}


function showTask(){
    userContents.innerHTML = localStorage.getItem("data");
}


// saveData();
showTask();



