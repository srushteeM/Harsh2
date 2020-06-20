class Red{
    constructor(x,y){
        this.x=random(3,390);
        this.y=random(0,300);
    }

    update(){
        this.y=this.y+5;
        if(this.y>400){
            this.y=random(0,300);
        }
    }

    display(){
       push();
       strokeWeight(1);
       stroke("black");
       fill("red");
       ellipse(this.x,this.y,random(2,9),random(2,9));
       pop();

    }

    
    

    

}