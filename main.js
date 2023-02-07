
// we are saving the api into A VAribALe storing
var SpeechRecognition = window.webkitSpeechRecognition;
 
var recognition = new SpeechRecognition();

// inner html es para MANDAR algo
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
 
recognition.onresult = function(event) {


 console.log(event);


var Content = event.results[0][0].transcript;


    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
      if(Content =="take my selfie")
      {
        console.log("taking your selfie :) --- ");
       // speak();
      }
}

