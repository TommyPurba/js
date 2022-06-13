
// document.querySelector(".drum").addEventListener("click", function handleclick() {
//     alert("i got it");
// });

buttonsDrum = document.querySelectorAll("button");
for (let i = 0; i < buttonsDrum.length; i++){
buttonsDrum[i].addEventListener("click",function(){
       var buttoninnerHTML = this.innerHTML;
        soundup(buttoninnerHTML);
        buttonAnimasi(buttoninnerHTML);
} );
}

document.addEventListener("keydown", function (event) {
    soundup(event.key);
    buttonAnimasi(event.key);
});

function soundup(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;    
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break; 
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;  
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break; 
        default:
            console.log(key);
            break;
       }
}

function buttonAnimasi(curentkey) {
    var aktifButton =   document.querySelector("."+curentkey);
    aktifButton.classList.add("pressed");

    setTimeout(function() {
        aktifButton.classList.remove("pressed");
    }, 100);
}