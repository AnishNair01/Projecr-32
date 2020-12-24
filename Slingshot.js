class Slingshot {

    constructor(b1, point) {
      var options = {
        length: 1,
        stiffness: 0.04,
        bodyA: b1,
        pointB: point
      }
      this.slingshot = Constraint.create(options);
      World.add(world, this.slingshot);
     
    }
    display() {
      if (this.slingshot.bodyA) {
        var p1 = this.slingshot.bodyA.position;
        var p2 = this.slingshot.pointB;
        strokeWeight(7);
        stroke("#39E2CE");
        //push()
        line(p1.x,p1.y,p2.x,p2.y)
        //pop()
      }
    
    }
  
    fly() {
  
      this.slingshot.bodyA = null;
  
    }
    attach(body){
      this.slingshot.bodyA=body;
    }
  }