class Mango{
    constructor(x,y){
        var options = {
            isStatic:true,
            restitution:0.1,
            density:1.0
        }

        this.body = Bodies.circle(x,y,1,options);
        this.image = loadImage('images/mango.png');
        this.radius = 1;
        World.add(world,this.body);
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,80,80);
        pop();
    }
}