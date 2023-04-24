var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start() {
    speak()
}


camera = document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
});



function speak() {


    var synth = window.speechSynthesis;
    Webcam.attach(camera);



    setTimeout(function () {
        ceu = "s1"
        speakData = "Tirando sua selfie em 5 segundos";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
        takeselfie()
    }, 5000)

    setTimeout(function () {
        ceu = "s2"
        speakData = "Tirando sua selfie em 5 segundos";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
        takeselfie()
    }, 10000)

    setTimeout(function () {
        ceu = "s3"
        speakData = "Tirando sua selfie em 5 segundos";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
        takeselfie()
    }, 15000)



}
function takeselfie(){
if(ceu == "s1"){
Webcam.snap(function(URI){

document.getElementById("result1").innerHTML = "<img src="+URI+">"
})
}
if(ceu == "s2"){
    Webcam.snap(function(URI){
    
    document.getElementById("result2").innerHTML = "<img src="+URI+">"
    })
    }
    
    if(ceu == "s3"){
        Webcam.snap(function(URI){
        
        document.getElementById("result3").innerHTML = "<img src="+URI+">"
        })
        }
        
            


}


    
    
    
    
    