/* initialisation of display and variables*/
let total1 = 0;
let subtotal1 = 0;
let total2 = 0;
let subtotal2 = 0;
let dice = 1;
let currentPlayer = 1;

document.querySelector(".dice1").style.display = `none`;
document.querySelector(".dice2").style.display = `none`;
document.querySelector(".subtotal1").textContent = 0;
document.querySelector(".subtotal2").textContent = 0;

/* function that switches current player */

    const switchPlayer = () => {
        if (currentPlayer===1) {
            currentPlayer=2;
            document.querySelector(".player-name1").style.color = "black";
            document.querySelector(".player-name2").style.color = "red";

        }
        else {
            currentPlayer=1;
            document.querySelector(".player-name1").style.color = "red";
            document.querySelector(".player-name2").style.color = "black";
        }
    }

/* roll button controller */
    const rollButton = () => {
        document.querySelector(".btn-roll").addEventListener("click", function() {
        var dice = Math.floor(Math.random()*6)+1;
        
        if (currentPlayer===1) {
        document.querySelector(".player-name1").style.color = "red";
        document.querySelector(".dice1").style.display = "block";
        document.querySelector(".dice1").src = "images/dice" + dice + ".png"
    
        if(dice!==1) {
            subtotal1+=dice;
            document.querySelector(".subtotal1").textContent = subtotal1;
        }
        else if(dice===1) {
            subtotal1 = 0;
            document.querySelector(".subtotal1").textContent = subtotal1;
        } 

        } else if (currentPlayer===2) {

        document.querySelector(".dice2").style.display = "block";
        document.querySelector(".dice2").src = "images/dice" + dice + ".png"
    
        if(dice!==1) {
            subtotal2+=dice;
            document.querySelector(".subtotal2").textContent = subtotal2;
        }
        else if(dice===1) {
            subtotal2 = 0;
            document.querySelector(".subtotal2").textContent = subtotal2;
        } 
        }   
    })
}
/* hold button controller */
    const holdButton = () => {


        document.querySelector(".btn-hold").addEventListener("click", function() {
        if (currentPlayer===1) {
        if (total1+subtotal1>99) {
            document.querySelector(".total1").textContent = "You Win!!";
            document.querySelector(".total1").style.color = "red";
            document.querySelector(".player-name1").style.color = "black";
            document.querySelector(".btn-roll").style.display = "none";
            document.querySelector(".btn-hold").style.display = "none";

        }

        else {    
        total1+=subtotal1;
        document.querySelector(".total1").textContent = total1;
        subtotal1 = 0;
        document.querySelector(".subtotal1").textContent = subtotal1;
        switchPlayer();
        }
        } 
        
        else if (currentPlayer===2) {
            if (total2+subtotal2>99) {
                document.querySelector(".total2").textContent = "You Win!!";
                document.querySelector(".total2").style.color = "red";
                document.querySelector(".btn-roll").style.display = "none";
                document.querySelector(".btn-hold").style.display = "none";
                document.querySelector(".player-name2").style.color = "black";


            }
    
            else {    
            total2+=subtotal2;
            document.querySelector(".total2").textContent = total2;
            subtotal2 = 0;
            document.querySelector(".subtotal2").textContent = subtotal2;
            switchPlayer();


        }
    }
})
    }
/* function that starts the game */
    const playTheGame = () => {
        
            rollButton();
            holdButton();
    }
            
/* calls the playTheGame function */
    playTheGame();
