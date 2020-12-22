class Bob {
    constructor(x,y,radius){
        var options = {
            density : 1,
            restitution : 1
        }
        this.bob=MyBodies.circle(x,y,radius,options);
        this.radius=radius;
        //this.bob.position.x=mouseX;
        //this.bob.position.y=mouseY;
        MyWorld.add(world,this.bob);
    }
    display(){
        var pos=this.bob.position;
        var angle=this.bob.angle;
        push();
        fill("#fffa63");
        translate(pos.x,pos.y);
        rotate(angle);
        stroke("#fc6262");
        strokeWeight(7);
        circle(pos.x-pos.x,pos.y-pos.y,this.radius*2);
        pop();
    }
}