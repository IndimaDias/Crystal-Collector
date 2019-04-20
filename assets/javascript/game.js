
$(document).ready(function(){

    var totalNumer = 0; 
    var userCount = 0;
    var wins = 0;
    var losses = 0;

    var divRules = $(".rules");
    var divcontainer = $("#container");
    var divAlert = $("#modal");

    divRules.hide();
    divAlert.hide();

    $('#btnRules').on('click',function(){
      
        
debugger;
        if (divRules.is(':visible')){
            divRules.slideUp('1000');
            divcontainer.animate({"top" : "45%"});
            
        }
        else {
            divRules.slideDown('1000');
            divcontainer.animate({"top" : "70%"});
            
        }      
           
    });

    generateNumbers();

    /*-----------------------------------------------------------------------------------------------------------*/

    function generateNumbers(){
        totalNumer = Math.floor(Math.random() * 120) + 19;

        $("#randNumber").text(totalNumer);

        $(".btnCrystals").each(function(){
            this.value = Math.floor(Math.random() * 12) + 1;
            console.log(this.value);
        });
       
    }

    /*-------------------------------------------------------------------------------------------------------------*/
    $(".btnCrystals").on('click', function(){
        console.log(this.value);
        debugger;
        userCount = userCount + parseInt(this.value);

        $("#total").text(userCount);

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
        debugger;
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

