const squares=document.querySelectorAll(".square")
const mole=document.querySelector(".mole")
const score=document.getElementById("score")
const timeleft=document.getElementById("time-left")

let result=0
let hitposition
let currentTime=15
let timerid


    function randomsquare(){
        squares.forEach(square => {
            square.classList.remove("mole")
           
           
        });
        let randomsquare=squares[Math.floor(Math.random()*9)]
        randomsquare.classList.add("mole")
        hitposition=randomsquare.id
    }
    squares.forEach(square => {
        square.addEventListener("mousedown",()=>{
            if(square.id==hitposition){
                result++
                score.textContent=result
                hitposition=null
            }
            
        })
    })
    function start(){
    function moveMole(){
    
     timerid=setInterval(randomsquare, 1000)
    }
    moveMole()
    

    function countDown(){
        currentTime--
        timeleft.textContent=currentTime
        if(currentTime==0){
            clearInterval(countDownTimerId)
          if(result==0){
            alert("GAME OVER, YOU LOSE")
          
           
        }
        else{
            alert("GAME OVER, YOUR CURRENT SCORE :"+result)
        }
        
        currentTime=15
        timeleft.textContent=currentTime
        result=0
        score.textContent=result
            clearInterval(timerid)

            
           
        }
       
        
       
       
    
    }
     let countDownTimerId=setInterval(countDown,1000)
} start()
    
