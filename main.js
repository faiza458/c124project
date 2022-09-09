function setup(){
video = createCapture(VIDEO);
video.size(550,500)

    canvas = createCanvas(560,550);
canvas.position(560,150)

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
background('#808080')
}

function modelLoaded(){
console.log('poseNet Is Initialized');
}

function gotPoses(results){
if(results.lenght > 0){
    console.log(results);
}

}