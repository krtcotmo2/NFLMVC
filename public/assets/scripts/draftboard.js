$(".btnReset").on("click", function(){
     $.ajax("/resetAll",{
          type:"POST"
     }).then(function(data){
          console.log(data);
     });
});

$(".addPlayer").on("submit", function(evt){
     event.preventDefault();

     vals = {
          name: $("#tboxName").val().trim(),
          prating: $("#tboxRating").val().trim(),
          position: $("#cboxPos option:selected").text()
     };
     $.ajax("/addRinger",{
          type:"POST",
          data: vals
     }).catch(function(err){
          console.log(err);
     })
     
})