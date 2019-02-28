$("#btnSubmit").on("click", function(evt){
     evt.preventDefault();
     vals = {
          name: $("#tboxName").val().trim(),
          prating: $("#tboxRating").val().trim(),
          position: $("#cboxPos option:selected").text()
     };
     $.ajax("/addRinger",{
          type:"POST",
          data: vals
     }).then(function(data){
          window.location="/";
     })
     .catch(function(err){
          console.log(err);
     })
});