// Iteration 2: Generate 2 random number and display it on the screen
var Number1 = document.getElementById("number1")
var Number2 = document.getElementById("number2")
var score=0
let number1 = Math.floor(Math.random()*100)
let number2 = Math.floor(Math.random()*100)
Number1.innerText=number1
Number2.innerText=number2


// Iteration 3: Make the options button functional
var Buttons = document.getElementById("buttons")
var Greater = document.getElementById("greater-than")
var Smaller = document.getElementById("lesser-than")
var Equal = document.getElementById("equal-to")

Greater.addEventListener("click",()=>{
    if(number1>number2){
        score++
        ResetTimer()
    }
    else {
        window.location.href="./gameover.html"
    }
     number1 = Math.floor(Math.random()*100)
     number2 = Math.floor(Math.random()*100)
    Number1.innerText=number1
    Number2.innerText=number2

})
    Smaller.addEventListener("click",()=>{
        if(number1<number2){
            console.log("smaller")
            score++
            ResetTimer()
        }
        else{
            window.location.href="gameover.html"
        }
        number1 = Math.floor(Math.random()*100)
        number2 = Math.floor(Math.random()*100)
        Number1.innerText=number1
        Number2.innerText=number2
    })



  Equal.addEventListener("click",()=>{
          if(Number1===Number2){
              score++
              ResetTimer()
            }
            else{
                window.location.href="gameover.html"
            }
        })

      number1 = Math.floor(Math.random()*100)
     number2 = Math.floor(Math.random()*100)
    Number1.innerText=number1
    Number2.innerText=number2
    
    // Iteration 4: Build a timer for the game
    var Timer = document.getElementById("timer")
    var TimeDecrement ;
    function TimeStart (){
        let time = 5
        Timer.innerHTML=time
        
        
        TimeDecrement=setInterval(()=>{
            time--
            if(time===0){
                    window.location.href="./gameover.html"
                 }
                Timer.innerHTML=time;
            },1000)
            localStorage.setItem("scoore",score)
        }
        
  
    function ResetTimer(){
        clearInterval(TimeDecrement)
        TimeStart()
    }
    TimeStart()
