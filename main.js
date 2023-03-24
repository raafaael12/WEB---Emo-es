//https://teachablemachine.withgoogle.com/models/WZ6IPezt9/model.json
Webcam.set({
    width:800,
    height:500,
    image_format: 'png' ,
    png_quality:90
})
var camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML = '<img id="captured_image" src="'+ data_uri+'">'       
    })
}
console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/2ZuJvLBDR/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    img= document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error)
    } else{
        console.log(results);
        document.getElementById("resultObjectName").innerHTML = results[0].label;
        document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}