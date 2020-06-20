
var raindrop1 = [];
var raindrop2 = [];

function setup(){
    var canvas = createCanvas(400,400);
    for(var i=0;i<1000;i++){
        raindrop1.push(new Red() );
    }
    for(var i=0;i<1000;i++){
        raindrop2.push(new Green() );
    }
}

function draw(){
    background(0);
     for(var i=0;i<1000;i++){
        raindrop1[i].display();
        raindrop1[i].update();
    }
     for(var i=0;i<1000;i++){
        raindrop2[i].display();
        raindrop2[i].update();
    }
    
}



