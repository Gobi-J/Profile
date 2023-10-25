const cursorDesign = document.querySelector('.cursor-style');

document.addEventListener("mousemove", movecursor);

function movecursor(e){
    let x = e.clientX;
    let y = e.clientY;
    document.querySelector('.cursor-style').style.top = y+'px';
    document.querySelector('.cursor-style').style.left = x+'px';
    document.querySelector('.cursor-style2').style.top = y+'px';
    document.querySelector('.cursor-style2').style.left = x+'px';
}