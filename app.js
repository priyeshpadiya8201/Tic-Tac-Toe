console.log("Welcome to Tic Tac Toe")
 var turn=""
 
var gameover = false;

//Function to change the turn
const changeTurn = ()=>
{
        btn1.addEventListener('click',()=>
    {
        turn='X';
        if(!gameover)
        
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    
    });
        btn2.addEventListener('click',()=>
    {    
        turn='O';
        if(!gameover)
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    
    }); 
    
    return turn;
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameover = true
            if(gameover){
                document.getElementById('btn1').Disabled;
                document.getElementById('btn2').Disabled;
            }
          
        }
        
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
           
        }

    })
})