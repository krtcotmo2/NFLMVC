$(".editPlayer").on("submit", function(evt){
     event.preventDefault();
     vals = {
          name: $("#tboxName").val().trim(),
          prating: $("#tboxRating").val().trim(),
          position: $("#cboxPos option:selected").text(),
          playerid: $("#cboxPlayer option:selected").val()
     };
     console.log(vals)
     $.ajax("/editPlayer",{
          type:"POST",
          data: vals
     }).catch(function(err){
          console.log(err);
     })
});

$("#cboxPlayer").change(function(evt){
     if($("#cboxPlayer option:selected").val() ==0){
          return;
     }
     let val =$("#cboxPlayer option:selected").val()
     $.ajax("/getPlayer/"+val,{
          type:"GET"
     })
     .then(function(data){
          $("#tboxName").val(data[0].name);
          $("#cboxPos").val(data[0].position);
          $("#tboxRating").val(data[0].prating);
     })
     .catch(function(err){
          console.log(err);
     })


   
})