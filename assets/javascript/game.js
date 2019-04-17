
$(document).ready(function(){
    var divRules = $(".rules");
    var divcontainer = $("#container")
    divRules.hide();
    $('#btnRules').on('click',function(){
      
        
        // if($("#dRules").style.display == '' || $("#dRules").style.display == 'none' ){
        //     $("#dRules").style.display = 'block';
        // }
        // else if ($("#dRules").style.display == 'block') {
        //     //      debugger;
        //     $("#dRules").style.display = 'none';
        // }
debugger;
        if (divRules.is(':visible')){
            divRules.slideUp('1000');
            divcontainer.animate({"top" : "45%"});
            
        }
        else {
            divRules.slideDown('1000');
            divcontainer.animate({"top" : "70%"});
            
        }
        // divRules.toggle('1000');
           
    });
});

