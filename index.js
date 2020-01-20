
// Do upon initialization of document
var buttonArray = document.querySelectorAll(".set button");
//var mySoundBoard = new SoundBoard();
for(var i = 0; i < buttonArray.length; i++)
{
  buttonArray[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", handleKeyDown);


// function SoundBoard(){
//   this.c4 = new Audio("sounds/waluigi-sounds/waluigi-c4.mp3");
//   this.d4 = new Audio("sounds/waluigi-sounds/waluigi-d4.mp3");
//   this.e4 = new Audio("sounds/waluigi-sounds/waluigi-e4.mp3");
//   this.f4 = new Audio("sounds/waluigi-sounds/waluigi-f4.mp3");
//   this.g4 = new Audio("sounds/waluigi-sounds/waluigi-g4.mp3");
//   this.e4 = new Audio("sounds/waluigi-sounds/waluigi-e4.mp3");
//   this.a4 = new Audio("sounds/waluigi-sounds/waluigi-a4.mp3");
//   this.c5 = new Audio("sounds/waluigi-sounds/waluigi-c5.mp3");
//   this.d5 = new Audio("sounds/waluigi-sounds/waluigi-d5.mp3");
//   this.play = function(note){
//     switch(note){
//     case "c4":
//       this.c4.play();
//       break;
//     case "d4":
//       this.d4.play();
//       break;
//     case "e4":
//       e4.play();
//       break;
//     case "f4":
//       f4.play();
//       break;
//     case "g4":
//       g4.play();
//       break;
//     case "a4":
//       a4.play();
//       break;
//     case "b4":
//       b4.play();
//       break;
//     case "c5":
//       c5.play();
//       break;
//     default:
//       alert("default case activated.");
//       break;
//     }
//   }
// }

function MusicalNote(htmlNote, note){
  this.htmlNote = htmlNote;
  this.note = note;
}

function handleClick(){
  var myNote = new MusicalNote(this, determineNote(this.innerHTML));
  playNote(myNote);
}

function handleKeyDown(){
  var checkNote = determineNote(event.key);
  if(checkNote)
  {
    var myNote = new MusicalNote(document.querySelector("." + event.key), checkNote);
    playNote(myNote);
  }
}

function playNote(musicNote){
  musicNote.htmlNote.classList.add("pressed");
  setTimeout(function(){musicNote.htmlNote.classList.remove("pressed")}, 100);
  makeSound(musicNote.note);
}

function determineNote(key){
  switch (key){
    case "a":
      return "c4";
      break;
    case "s":
      return "d4";
      break;
    case "d":
      return "e4";
      break;
    case "h":
      return "f4";
      break;
    case "j":
      return "g4";
      break;
    case "k":
      return "a4";
      break;
    case "l":
      return "b4";
      break;
    case "q":
      return "c5"
    case "w":
      return "d5"
      break;
    default:
      console.log("Button not found.");
      return "";
      break;
  }
}

function makeSound(note){
  switch (note) {
    case "c4":
      var c4 = new Audio("sounds/waluigi-sounds/waluigi-c4.mp3")
      c4.play();
      break;
    case "d4":
      var d4 = new Audio("sounds/waluigi-sounds/waluigi-d4.mp3");
      d4.play();
      break;
    case "e4":
      var e4 = new Audio("sounds/waluigi-sounds/waluigi-e4.mp3");
      e4.play();
      break;
    case "f4":
      var f4 = new Audio("sounds/waluigi-sounds/waluigi-f4.mp3");
      f4.play();
      break;
    case "g4":
      var g4 = new Audio("sounds/waluigi-sounds/waluigi-g4.mp3");
      g4.play();
      break;
    case "a4":
      var a4 = new Audio("sounds/waluigi-sounds/waluigi-a4.mp3");
      a4.play();
      break;
    case "b4":
      var b4 = new Audio("sounds/waluigi-sounds/waluigi-b4.mp3");
      b4.play();
      break;
    case "c5":
      var c5 = new Audio("sounds/waluigi-sounds/waluigi-c5.mp3");
      c5.play();
      break;
    case "d5":
      var d5 = new Audio("sounds/waluigi-sounds/waluigi-d5.mp3");
      d5.play();
      break;
    default:
      console.log("Error: Sound file not found.");
      break;
  }
}
