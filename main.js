classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Rp7U5U5oU/model.json",ModelLoaded);
Webcam.set({
    width:200,
    height:200,
    image_format:'png',
    img_quality:100
});
camera = document.getElementById("WS");
Webcam.attach("#WS");
function ModelLoaded(){
    console.log("X");
}
function TS(){
    Webcam.snap(function(data_uri){
        var Result = "<img class = 'img' id = 'CheckeredSnapshot' src = " + data_uri + ">";
        document.getElementById("SIUnitOfWeightIsNewton").innerHTML = Result;
    });
}
function SEENOW(){
    synth = window.speechSynthesis;
    sd1 = "The first Prediction is ... " + prediction1;
    sd2 = "The second Prediction is ... " + prediction2;
    uT = new SpeechSynthesisUtterance(sd1 + sd2);
    synth.speak = uT;
}