noseX=0;
noseY=0;
function preload(){
clownNose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes)
}
function draw(){
image(video, 0,0,300,300);

image(clownNose,noseX,noseY,30,30);
}
function take_snapshot(){
    save(myFilterImage.png);
}
 function modelLoaded(){
    console.log('posenet is inisilised');
 }
 function gotposes(result){
    if (result.length>0){
console.log(result);
noseX=result[0].pose.nose.x-10;
noseY=result[0].pose.nose.y+10;
console.log("nose x= "+noseX);
console.log("nose y= "+noseY);

   }
 }