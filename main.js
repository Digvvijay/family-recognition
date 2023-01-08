Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('camera');

function takesnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_image">';});
}

console.log('ml5version',ml5.version);

Classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lMqlPsvIK/model.json',modelLoaded);