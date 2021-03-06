class Block{
    constructor(x, y, width, height) {
        var options = {
          'restitution':0.8,
          'friction':0.1       
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("block.png");
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        World.add(world, this.body);
      }
      display(){

        if(this.body.speed<3){
        var angle = this.body.angle;
        var pos= this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }
        else{
          World.remove(world,this.body);
          push();
          this.Visibility-=5;
          tint(255,this.Visibility);
          image(this.image,this.body.position.x,this.body.position.y,30,40);
          pop();
        }
      }
}




