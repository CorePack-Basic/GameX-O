// Empty boxnum to x and o

let turn = "X";

let overGame = false;

// Select Switch 
let x = document.querySelector(".x")
let o = document.querySelector(".o")


let boxes = document.querySelectorAll(".box-num")

boxes.forEach((e) => {
    e.innerHTML = "";
 
    e.addEventListener("click" , () => {
    
    // Handle textContent for boxNum to X - O
      e.innerHTML = turn;

    // Add this class to not avoid mix x and o in same element
      e.classList.add("disabled")
      changeTurn()
      changeDraw()
      draw()
    })

})


function changeTurn() {

    if(turn === "X") {

        turn = "O";
         

       x.style.background = "none"; 
       
       o.style.background = "red"; 

    }else {

        o.style.background = "none"; 
        
        x.style.background = "red"; 

        turn = "X";


    }


}


function changeDraw() {


    let arrayOfNum = [
        [0 , 1 , 2] , [3 , 4 , 5] , [6 , 7 , 8] ,
        [0 , 3 , 6] , [1 , 4 , 7] , [2 , 5 , 8] ,
        [0 , 4 , 8] , [2 , 4 , 6 ]
    ]


    for(let i = 0; i < arrayOfNum.length;i++) {
        let first = boxes[arrayOfNum[i][0]].innerHTML;
        let second = boxes[arrayOfNum[i][1]].innerHTML;
        let third = boxes[arrayOfNum[i][2]].innerHTML; 
      
      
        if(first != "" && first == second && first == third) {
            
            for(let j = 0; j < 3;j++) {
                boxes[arrayOfNum[i][j]].style.background = "#08D9D6";
            }
            boxes.forEach((e) => {
                e.classList.add("disabled")
            })


            document.querySelector(".winner div").textContent = boxes[arrayOfNum[i][0]].innerHTML + " " +  "Is Winner";

            let DivOfBtn = document.createElement("div")
            DivOfBtn.className = "btn-play"

            let button = document.createElement("button")
            let textNode = document.createTextNode("Play Again")
            
            button.className = "btn";
            // Append text Node in button

            button.appendChild(textNode)

            // Append Button in divofbtn
            DivOfBtn.appendChild(button)

            // Append DivOfBtn in gameContainer
            document.querySelector(".game-container").appendChild(DivOfBtn)
        
        
            button.addEventListener("click" , () => {
                window.location.reload()
            })
        }
        
    }

}

function draw() {
    let currentDraw = 0;

    boxes.forEach((e) => {
        if(e.innerHTML != "") {
            currentDraw++
        }
    })
    
    if(currentDraw == 9) {
        document.querySelector(".winner div").textContent = "Draw";

        let DivOfBtn = document.createElement("div")
        DivOfBtn.className = "btn-play"

        let button = document.createElement("button")
        let textNode = document.createTextNode("Play Again")
        
        button.className = "btn";
        // Append text Node in button

        button.appendChild(textNode)

        // Append Button in divofbtn
        DivOfBtn.appendChild(button)

        // Append DivOfBtn in gameContainer
        document.querySelector(".game-container").appendChild(DivOfBtn)
    
    
        button.addEventListener("click" , () => {
            window.location.reload()
        })
    }

}




let arrayOfNum = [
    [0 , 1 , 2] , [3 , 4 , 5] , [6 , 7 , 8] ,
    [0 , 3 , 6] , [1 , 4 , 7] , [2 , 5 , 8] ,
    [0 , 4 , 8] , [2 , 4 , 6 ]
]

for(let i = 0; i < arrayOfNum.length;i++) {
    console.log(arrayOfNum[i][0] , arrayOfNum[i][1] , arrayOfNum[i][2])
}