let turn= "X"
let boxes=document.getElementsByClassName('box')
let X=document.getElementById('X')
let O=document.getElementById('O')
let ytx=document.getElementById('ytx')
let yto=document.getElementById('yto')
let win=0;
let scorex=document.getElementById('score-x')
let scoreo=document.getElementById('score-o')
let x=0;
let o=0;
let reset=document.getElementById('reset');
let ting=new Audio("click.mp3");
let music=new Audio("music.mp3");
let gameover=new Audio("win.mp3");
music.loop = true;
music.play();

const changeturn = ()=>{
    if(turn=="X"){
        turn="O";
        X.style.backgroundColor= "rgb(181, 127, 218)";
        O.style.backgroundColor= "rgb(245, 245, 104)"
        yto.textContent="Your Turn";
        ytx.textContent="";
    }
    else{
        turn="X";
        O.style.backgroundColor= "rgb(181, 127, 218)";
        X.style.backgroundColor= "rgb(245, 245, 104)";
        ytx.textContent="Your Turn";
        yto.textContent="";
    }
}

const checkwin = ()=>{
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e => {
        if(boxes[e[0]].textContent===boxes[e[1]].textContent && boxes[e[0]].textContent===boxes[e[2]].textContent && boxes[e[0]].textContent!=""){
            win=1;
            gameover.play();
            if(turn=="O"){
                yto.textContent="";
                ytx.textContent="You Won";
                O.style.backgroundColor= "rgb(235, 114, 114)";
                X.style.backgroundColor= "rgb(93, 220, 125)";
                x++;
                scorex.textContent="X : "+ x;
                document.getElementById('xx').style.width="100px";
            }
            else{
                yto.textContent="You Won";
                ytx.textContent="";
                X.style.backgroundColor= "rgb(235, 114, 114)";
                O.style.backgroundColor= "rgb(93, 220, 125)";
                o++;
                scoreo.textContent="O : "+ o;
                document.getElementById('oo').style.width="100px";
            }
        }
    });
}

Array.from(boxes).forEach(element => {
    element.addEventListener('click',()=>{
        if(element.textContent!=""){
            alert("This Box is already filled, Please select other");
        }
        else{
            if(win==0){
                element.textContent= turn;
                changeturn();
            }
            else{
                alert("Game is Over, Please Reset to Start Again");
            }
            if(win==0){
                checkwin();
                if(win==0){
                    ting.play();
                }
            }
        }
    })
});

reset.addEventListener('click',()=>{
    changeturn();
    changeturn();
    win=0;
    Array.from(boxes).forEach(element => {
        element.textContent="";
    });
    document.getElementById('oo').style.width="0px";
    document.getElementById('xx').style.width="0px";
})