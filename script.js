console.log("Welcome to TicTacToe")

let turn = 'X'
let gameover = false

const changeTurn = ()=>{
    return turn === 'X'? 'O' : 'X'
}

const checkWin = ()=>{

    let winbox = document.getElementsByClassName("boxtext")
    let condition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    condition.forEach(e=>{
        if((winbox[e[0]].innerText === winbox[e[1]].innerText) && (winbox[e[1]].innerText === winbox[e[2]].innerText) && (winbox[e[0]].innerText !== '')){
            document.querySelector(".info").innerText = winbox[e[0]].innerText + " won "
            gameover = true
            document.getElementsByClassName("image")[0].getElementsByTagName("img")[0].style.width = "30vw"
        }
    })
}


let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtText = element.querySelector(".boxtext")
    element.addEventListener('click',()=>{

        if(boxtText.innerText === ''){
            boxtText.innerText = turn
            turn = changeTurn()
            checkWin()
            if(!gameover){

                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
            }
        }
    })

})

//reset event
let res = document.getElementById("reset")
res.addEventListener('click',()=>{
    let boxtexts = document.getElementsByClassName("boxtext")
    Array.from(boxtexts).forEach((element)=>{
        element.innerText = ""
        turn = "X"
        gameover = false
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
        document.getElementsByClassName("image")[0].getElementsByTagName("img")[0].style.width = "0px"
        
    })

})

