
function saythatwaseasy() {
var thatwaseasy = new Audio("that_was_easy.mp3") ;
thatwaseasy.play() ;
}

$("#easy").on("click", saythatwaseasy);

$(document).keypress(delegatekeypress);
function delegatekeypress(event){
    if (event.charCode == 32) {
        $("easy").trigger("click");
    }
}