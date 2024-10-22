let round = document.querySelector(".round");
let btn = document.querySelectorAll("button");
let shape = document.querySelector("#square");




btn[0].addEventListener("click", ()=>{
    round.style.backgroundColor = changeColor();
});

function changeColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0 ; i < 6 ; i++){
        color+= letters[Math.floor(Math.random()*16)];
    }
    return color;
}

btn[1].addEventListener("click", changeShape);

let arr = ["square", "circle", "oval", "triangle", "trapezoid", "hexagon", "pentagon", "star", "parallelogram", "crescent" ,"diamond"];


function randomShape(){
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function changeShape(){
    let randomId = randomShape();
    shape.id = randomId;
    console.dir(shape);
}

