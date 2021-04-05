class Stone {
    constructor(x, y, width, height) {
      var options = {
        
          'frictionAir':0.005,
          'restitution' : 0,
          'density':1

      }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/stone.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill(80);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };