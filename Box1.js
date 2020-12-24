class Box1{
    constructor(x, y, width, height) {
      this.visibility = 255
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        if(this.body.speed>3){
        World.remove(world,this.body)
        push()
        this.visibility = this.visibility-5;
        pop();
      }
      else{
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5)
        stroke("black")
        fill("#FFC0CB")
        rect(0, 0, this.width, this.height);
        pop();
      }
    }
    score(){
      if(this.visibility<0 && this.visibility>-105){
        score++;
      }
    }
}