var speechr=window.webkitSpeechRecognition;
var Recognition=new speechr();
var textbox=document.getElementById("output");
function start(){
    textbox.innerHTML="";
    Recognition.start();
}
function speak(){
    console.log("dfghuio");
    var synth= window.speechSynthesis;
    
    var utterthis=new SpeechSynthesisUtterance("taking your selfie in 5 seconds");
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function() { take_snap_shot(); save(); }, 5000);
}
Recognition.onresult=function (event){
    console.log(event);
var Content= event.results[0][0].transcript;
document.getElementById("output").innerHTML=Content;
if(Content=="take my selfie"){
    speak();   
}
}
camera = document.getElementById("webcam");
 Webcam.set({ 
     width:360,
      height:250,
       image_format : 'jpeg',
        jpeg_quality:90
     });

function take_snap_shot(){
    Webcam.snap(function(data_url){
document.getElementById("selfie").innerHTML='<img  id="selfie_click" src="'+data_url+'"/>';
    });
}
function save(){
 link=document.getElementById("link");
    image=document.getElementById("selfie_click").src;
    link.href=image;
    link.click();
}