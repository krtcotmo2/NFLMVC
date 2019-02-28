let round =1;
let pick = 1;
let clck = new Audio("../assets/media/click.mp3");

let buildDraftDisplay = () =>{
     let childLen = $(".drafterPlayers").children().length
     round = Math.ceil((childLen+1)/32);
     pick = 1 + (childLen%32);
     if(round>5){
          $(".teamIcon").css("display", "none")
          return;
     }
     $(".rndNum").text(round);
     $(".pickNum").text(pick);
     $(".teamIcon").css("display", "none")
     $(".teamIcon").filter(function( index ) {
          return parseInt($(this).data("draftpos")) >= pick%33 && parseInt($(this).data("draftpos")) <=  (pick%33)+2 
     }).css("display", "flex");

     $(".teamIcon").filter(function( index ) {
          return parseInt($(this).data("draftpos")) == pick%33;
     }).addClass("picker")
}

//HANDLES CLICKING ON A PLAYER IN AVAILABLE PLAYERS SO THEY CAN BE DRAFTED
$(document).on("click", ".playerHolder", function(){
     $(".playerHolder").removeClass("selected");
     $(".curSelection").html($(this).html());
     $(".curSelection").data("playerid", $(this).data("playerid"))
     $(this).addClass("selected");
})
//handles rollover sound
$(".playerHolder").mouseover(function(){
     clck.play()
});
//HANDELS FILTERING BY POSITION
$("#cboxPos").change(function(){
     let chosen = $("#cboxPos option:selected").val();
     $(".avails").css("display", "flex");
     if(chosen!=""){
     $(".avails").filter(function(){
          return $(this).data("pos") != chosen;
     }).css("display", "none");
     }
});
//MAKE DRAFT SELECTION
$("#btnDraft").on("click", function(){
     if($(".curSelection").html()===""){

     }else{
          $.ajax({
               url:"/draftPlayer",
               type:"POST",
               data:{
                    teamid:$(".picker").data("teamid"),
                    playerid:$(".curSelection").data("playerid"),
                    pickNum: ((round-1)*32) + pick
               }
          }).then(function(response){
               console.log(response);
               let drafted = $("<div class='draftedHolder drafted'>")
               drafted.append($(".curSelection").html());
               drafted.children(".deets").prepend(`<img src='../assets/images/${response[0].logo}'/>`)
               $(".drafterPlayers").eq(0).prepend(drafted);
               $(".curSelection").html("");
               $(".picker").removeClass("picker");
               $(".avails.selected").remove();
               buildDraftDisplay();
          }).catch(function(err){

          })
     }
})
//GET DRAFT ROUND AND PICK NUMBER
$(document).ready(function(){
     buildDraftDisplay();
});

