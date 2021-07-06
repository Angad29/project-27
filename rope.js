class Rope{
    constructor(bodyA,bodyB,xofset,yofset){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
           pointB :{x:xofset,y:yofset}
            


        }
        
        this.xofset = xofset
        this.yofset = yofset


        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
    }
    

    display(){

        
       
  var pointA = this.rope.bodyA.position     
  var pointB = this.rope.bodyB.position 
 
  var achor1x = pointA.x
  var achor1y = pointA.y

  var achor2x = pointB.x + this.xofset
  var achor2y = pointB.y + this.yofset

  line(achor1x,achor1y,achor2x,achor2y)

    }
}