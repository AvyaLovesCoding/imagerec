Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 90

});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function cap(){
    Webcam.snap(function(data_uri){
      document.getElementById("img").innerHTML="<img id='imge' src="+data_uri+">";

    });
}
console.log(ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoadedFunction);
 function modelLoadedFunction(){
     console.log("Model is loaded");
 }
 function ident(){
     img=document.getElementById("imge");
     classifier.classify(img,gotresult);
     
 }
 function gotresult(error,results){
     console.log("inside gotresult")
if(error){
    console.log(error);
}
else if(results){
console.log(results);
document.getElementById("object").innerHTML=results[0].label;
document.getElementById("accuracy").innerHTML=results[0].confidence;
}
 }