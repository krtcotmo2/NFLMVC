let round =1;
let pick = 1;
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
$(document).on("click", ".playerHolder", function(){
     $(".playerHolder").removeClass("selected");
     $(".curSelection").html($(this).html());
     $(this).addClass("selected");
})
$(document).ready(function(){
     console.log("children ", $(".drafterPlayers").children().length);
     let childLen = $(".drafterPlayers").children().length
     round = Math.ceil(childLen/32);
     pick = 1 + (childLen%32)
     $(".rndNum").text(round);
     $(".pickNum").text(pick);
     $(".teamIcon").filter(function( index ) {
          return parseInt($(this).data("draftpos")) < pick || parseInt($(this).data("draftpos")) >  pick+2
        }).css("display", "none");
});

$("#cboxPos").change(function(){
     let chosen = $("#cboxPos option:selected").val();
     $(".avails").css("display", "flex");
     if(chosen!=""){
     $(".avails").filter(function(){
          return $(this).data("pos") != chosen;
     }).css("display", "none");
     }
});
