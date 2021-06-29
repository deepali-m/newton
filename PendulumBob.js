class PendulumBob{
    constructor(x,y){
        var options = {isStatic: false, restitution: 0.3, friction: 0.5, density: 0.2};
	    this.body = Bodies.circle(x,y,60,options);
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        fill("yellow");
        ellipse(this.body.position.x, this.body.position.y, 60, 60);        
    }
}