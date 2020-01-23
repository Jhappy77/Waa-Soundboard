
// Do upon initialization of document
var buttonArray = document.querySelectorAll(".set button");
//var mySoundBoard = new SoundBoard();
for(var i = 0; i < buttonArray.length; i++)
{
  buttonArray[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", handleKeyDown);


function MusicalNote(htmlNote, note){
  // MusicalNote object: for holding the actual instance of the note in html,
  // as well as the musical note as a string.
  this.htmlNote = htmlNote;
  this.note = note;
}

function handleClick(){
  // PROMISES: Creates a MusicalNote object based on the data from the click,
  // and plays that note.
  var myNote = new MusicalNote(this, determineNote(this.innerHTML));
  playNote(myNote);
}

function handleKeyDown(){
  // PROMISES: If the key pressed is a valid key, plays a note.
  var checkNote = determineNote(event.key);
  if(checkNote)
  {
    var myNote = new MusicalNote(document.querySelector("." + event.key), checkNote);
    playNote(myNote);
  }
}

function playNote(musicNote){
  //PROMISES: Updates the display of the note through a CSS class, and calls makeSound.
  musicNote.htmlNote.classList.add("pressed");
  setTimeout(function(){musicNote.htmlNote.classList.remove("pressed")}, 100);
  makeSound(musicNote.note);
}

function determineNote(key){
  //PROMISES: Based on the key that was pressed, determines what musical note to play.
  switch (key){
    case "a":
      return "c4";
      break;
    case "A":
      return "c4#";
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
    case 'K':
      return "a4#";
      break;
    case "l":
      return "b4";
      break;
    case "q":
      return "c5";
    case "Q":
      return "c5#";
    case "w":
      return "d5";
      break;
    default:
      console.log("Button not found.");
      return "";
      break;
  }
}

function makeSound(note){
  //PROMISES: Plays a sound based on the musical note selected.
  var filePath = "sounds/waluigi-sounds/waluigi-" + note + ".mp3";
  var sound = new Audio(filePath);
  sound.play();
}
  // Old switch structure
  //  switch (note) {
  //   case "c4":
  //     var c4 = new Audio("sounds/waluigi-sounds/waluigi-c4.mp3")
  //     c4.play();
  //     break;
  //   case "d4":
  //     var d4 = new Audio("sounds/waluigi-sounds/waluigi-d4.mp3");
  //     d4.play();
  //     break;
  //   case "e4":
  //     var e4 = new Audio("sounds/waluigi-sounds/waluigi-e4.mp3");
  //     e4.play();
  //     break;
  //   case "f4":
  //     var f4 = new Audio("sounds/waluigi-sounds/waluigi-f4.mp3");
  //     f4.play();
  //     break;
  //   case "g4":
  //     var g4 = new Audio("sounds/waluigi-sounds/waluigi-g4.mp3");
  //     g4.play();
  //     break;
  //   case "a4":
  //     var a4 = new Audio("sounds/waluigi-sounds/waluigi-a4.mp3");
  //     a4.play();
  //     break;
  //   case "b4":
  //     var b4 = new Audio("sounds/waluigi-sounds/waluigi-b4.mp3");
  //     b4.play();
  //     break;
  //   case "c5":
  //     var c5 = new Audio("sounds/waluigi-sounds/waluigi-c5.mp3");
  //     c5.play();
  //     break;
  //   case "d5":
  //     var d5 = new Audio("sounds/waluigi-sounds/waluigi-d5.mp3");
  //     d5.play();
  //     break;
  //   default:
  //     console.log("Error: Sound file not found.");
  //     break;
  // }
