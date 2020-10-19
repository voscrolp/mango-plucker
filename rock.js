class Rock{
    constructor(x,y,radius){
        var options = {
            restitution:0,
            friction:1,
            density:1.2
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage('images/rock.png');
        World.add(world,this.body);
    }

    display(){
        push();
        imageMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}