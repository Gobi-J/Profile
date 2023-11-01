const cursorDesign = document.querySelector('.cursor-style');
const cursorDesign2 = document.querySelector('.cursor-style2');

document.addEventListener("mousemove", movecursor);

function movecursor(e){
    let x = e.clientX;
    let y = e.clientY;
    cursorDesign.style.top = y+'px';
    cursorDesign.style.left = x+'px';
    cursorDesign2.style.top = y+'px';
    cursorDesign2.style.left = x+'px';
}


const toggleGreet = document.querySelector("#pop > button");
const popDiv = document.querySelector("#pop div");

toggleGreet.addEventListener('click', () => {
    popDiv.style.left = 0 + "px";
    toggleGreet.style.opacity = 0;
});

const userName = document.getElementById("greetingUser");
if(localStorage.getItem("user")){
    userName.innerHTML = `Welcome ${localStorage.getItem("user")}`;
}
function greet(){
    const name = document.querySelector("#pop input").value;
    localStorage.setItem("user", name);
    
    userName.innerHTML = `Welcome ${name}`;
    popDiv.style.left = -250 + "px";
    toggleGreet.style.opacity = 1;
    
    const contactName = document.getElementById("contactname")
    contactName.setAttribute("value", name)
}