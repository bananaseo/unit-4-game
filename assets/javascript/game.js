$(document).ready(function() {

    //Global Variables=====================

    var crystal1 = Math.floor(Math.random() * 12) + 1; 

    var crystal2 = Math.floor(Math.random() * 12) + 1; 

    var crystal3 = Math.floor(Math.random() * 12) + 1; 

    var crystal4 = Math.floor(Math.random() * 12) + 1; 

    var randy = Math.floor(Math.random() * 120) + 19; 

    var win = 0; 

    var lose = 0; 

    var total = 0; 

    //Functions============================
    
    $("#randy").html(randy);
   

    $("body").on("click", "#crystal-1",    function () {
    
        total += crystal1;

        $("#total").html(total);  
        
    })

    $("body").on("click", "#crystal-2",    function () {
    
        total += crystal2;

        $("#total").html(total);  
    
    })

    $("body").on("click", "#crystal-3",    function () {
    
        total += crystal3;

        $("#total").html(total);  

    })

    $("body").on("click", "#crystal-4",    function () {
    
        total += crystal4;

        $("#total").html(total);  

    })

    if (total === randy) {
        alert("You win!");
        win++; 
        $("#win").html(win); 
    }

    else if (total >= randy) {
        alert("You lose!!");
        lose++; 
        $("#lose").html(lose); 
    }

})