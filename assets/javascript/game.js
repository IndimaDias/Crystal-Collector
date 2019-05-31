
$(document).ready(function(){

    var totalNumer = 0; 
    var userCount = 0;
    var wins = 0;
    var losses = 0;

    var divRules = $(".rules");
    var divcontainer = $("#container");
    var divAlert = $("#modal");

    divRules.hide(); //Hide the dive with rules on page load
    divAlert.hide(); // Hide the modal with alert messages on page load


// This is triggered when the rules button is pressed
    $('#btnRules').on('click',function(){
      
        // On button click the rules will be slided down or up 

        if (divRules.is(':visible')){
            divRules.slideUp('1000');
            divcontainer.animate({"top" : "45%"});
            
        }
        else {
            divRules.slideDown('1000');
            divcontainer.animate({"top" : "70%"});
            
        }      
           
    });

    generateNumbers(); // function to generate random numbers called when page loading

    /*-----------------------------------------------------------------------------------------------------------*/

    function generateNumbers(){
    // This function will generate random nos for number to tallied and the nos for the crystals

        totalNumer = Math.floor(Math.random() * 120) + 19; // number to be tallied. should be between 19 and 120

        $("#randNumber").text(totalNumer);

        // for each crystal generate random nos
        $(".btnCrystals").each(function(){
            this.value = Math.floor(Math.random() * 12) + 1;
            console.log(this.value);
        });
       
    }

    /*-------------------------------------------------------------------------------------------------------------*/

    // event called when crystal buttons are clicked
    $(".btnCrystals").on('click', function(){
        console.log(this.value);
        
        // add to the total player guessed
        userCount = userCount + parseInt(this.value);

        // assign to the total field
        $("#total").text(userCount);

        // cpmpare player guessed total and total to be guessed
        if(userCount === totalNumer){
            wins++;
            // alert("You Win");
            $("#wins").text(wins);      
            
            displayAlert('W');
        }
        else if(userCount > totalNumer){
            losses++;
            $("#lose").text(losses);
            // alert("You Lose");       
            resetGame();
            displayAlert('L');
        }
    });

    /*------------------------------------------------------------------------------------------------------------ */

    function resetGame(){
        totalNumer = 0; 
        userCount = 0;
        $("#total").text("");
        generateNumbers();
       
    }

   
/*-----------------------------------------------------------------------------------------------------------------*/
function displayAlert(optionId) {
    
  
    var alertText = $("#alertId");
    var alertContect ;

    if (optionId === 'W'){ // alert when user wins
    
            alertContect = "Congratulations!!!!! You won, Do you want to play again?";
       

    }
    else if (optionId === "L"){ // alert when user lose
        
        alertContect = " You Lose, Do you want to play again?";
    
    }
    else if(optionId === "E"){ //alert when user decided to quit game
        
        alertContect = "Game Over !!!!!!!";
     
        var alertBtnYes = $("#btnYes");
        alertBtnYes.hide();
    
        var alertBtnNo = $("#btnNo");
        alertBtnNo.hide();

    }
    alertText.text(alertContect);        
       
    divAlert.show();
}

/************************************************************************************************************** */

$(".controlButton").on("click",function(){
    if(this.value === 'Y'){
        resetGame();
        divAlert.hide();
    }
    else {
        displayAlert('E');
    }
});

});

