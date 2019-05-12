$(document).ready(function(){
    $("#clicky").on("click", function(event) {
        // prevent form from trying to submit/refresh the page
        event.preventDefault();
  
        // Capture User Inputs and store them into variables
        var name = $("#train-name").val().trim();
        var destination = $("#train-destination").val().trim();
        var time = $("#train-time").val().trim();
        var frequency = $("#frequency").val().trim();
        
  
        // Console log each of the user inputs to confirm we are receiving them
        console.log(name);
        console.log(destination);
        console.log(time);
        console.log(frequency);
  
        // Output all of the new information into the relevant HTML sections
        $("#name-display").text(name);
        $("#destination-display").text(destination);
        $("#frequency-display").text(time);
        $("#arrival-display").text(frequency);
  
      });

})