$(".btnReset").on("click", function(){
     $.ajax("/resetAll",{
          type:"POST"
     }).then(function(data){
          console.log(data);
     });
});