class Rope{
    constructor(bodyA,pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            lenght: 50
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this,this.rope);
    }

    fly(){
        this.rope.bodyA = null;
    }

    attach(ball){
        this.rope.bodyA = ball;
    }

    display(){
        if(this.rope.bodyA){
            var end = this.rope.bodyA.position;
            var start = this.pointB;
            push();
            strokeWeight(2);
            stroke("black");
            fill("red");

            line(start.x,start.y,end.x,end.y);
        }
    }
}