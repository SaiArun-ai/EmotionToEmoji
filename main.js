var prediction1;
var prediction2;
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
        var Results = "<img class = 'imgo' id = 'CheckeredSnapshot' src = " + data_uri + ">";
        document.getElementById("SIUnitOfWeightIsNewton").innerHTML = Results;
    });
}
function speak(){
    synth = window.speechSynthesis;
    sd1 = "The first Prediction is ... " + prediction1;
    sd2 = "       The second Prediction is ... " + prediction2;
    uT = new SpeechSynthesisUtterance(sd1 + sd2);
    synth.speak(uT);
}
function SEENOW(){
    img = document.getElementById("CheckeredSnapshot");
    classifier.classify(img,gr);
}
function gr(error,Result){
    if(error){
        console.error(error);
    }
    else{
        console.log(Result);
        document.getElementById("P1N").innerHTML = Result[0].label;
        document.getElementById("P2N").innerHTML = Result[1].label;
        prediction1 = Result[0].label;
        prediction2 = Result[1].label;
        speak();
        if(Result[0].label == "Astonished"){
            document.getElementById("P1E").innerHTML = "😮";
        }else if(Result[0].label == "Sleeping"){
            document.getElementById("P1E").innerHTML = "😴";
        }else if(Result[0].label == "Smirking"){
            document.getElementById("P1E").innerHTML = "😏";
        }else if(Result[0].label == "Grinning"){
            document.getElementById("P1E").innerHTML = "😃";
        }
        if(Result[1].label == "Astonished"){
            document.getElementById("P2E").innerHTML = "😮";
        }else if(Result[1].label == "Sleeping"){
            document.getElementById("P2E").innerHTML = "😴";
        }else if(Result[1].label == "Smirking"){
            document.getElementById("P2E").innerHTML = "😏";
        }else if(Result[1].label == "Grinning"){
            document.getElementById("P2E").innerHTML = "😃";
        }
    }
}