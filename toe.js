let boxes = document.querySelectorAll('.box');
console.dir(boxes[0]);
let rbtn = document.querySelector('#reset-btn');
let h3 = document.querySelector('h3');


let turnO = true;

let st = 0;
let now = 0;
let check = [];
let won = 0;
let pO = [];
let pX = [];
gamestart();

const winningp = [[0,1,2],[3,4,5],[6,7,8],
                  [0,3,6],[1,4,7],[2,5,8],
                  [0,4,8],[2,4,6]];


function gamestart(){
    let fplayer = Math.floor(Math.random()*2);
    if (fplayer == 0){
        h3.innerText = "Player O";
    }else{
        h3.innerText = "Player X";
    }
    st = fplayer;
    console.log(`First player: ${fplayer}`);
}




for(let box of boxes){
        box.addEventListener("click", function(){
            //console.dir(box);
            console.log(`Box choosed:${box.id}`);
            now = st;
            console.log(`Now:${now}`);
            if(st == 0){
                pO.push(parseInt(box.id));
                console.log(`pO: ${pO}`);
                let btn = document.getElementById(`${box.id}`);
                //console.dir(btn);
                h3.innerText = "Player X";
                btn.innerText = "O";
                st=1;
                console.log(`Next:${st}`);
                check = pO;
            }else{
                pX.push(parseInt(box.id));
                console.log(`pX: ${pX}`);
                let btn = document.getElementById(`${box.id}`);
                //console.dir(btn);
                 h3.innerText = "Player O";
                btn.innerText = "X";
                st=0;
                console.log(`Next:${st}`);
                check = pX;
            }

            for(let i=0;i<winningp.length;i++){

            let present = winningp[i].every((el) => (check.includes(el)));
            if(present){
                console.log("Present");
                won = 1;
                checkwin(now);
            }
            }

            let totalMoves = pO.length + pX.length;
            if (won == 0 && totalMoves == 9){
                console.log("Draw Match");
                h3.innerText = "It's a draw";
                for(let box of boxes){
                    box.disabled = true;
                }
            }

            
        });
    }



function checkwin(now){
    if (won == 1){
        for (let box of boxes) {
            box.disabled = true;
        }
        if (now == 1){
            h3.innerHTML = "Congratulations!! <br> Player X won";
        }else{
            h3.innerHTML = "Congratulations!! <br> Player O won";
        }
    }
}


rbtn.addEventListener("click", function(){
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    pO = [];
    pX = [];
    won = 0;
    //st = 0;
    gamestart();
})

