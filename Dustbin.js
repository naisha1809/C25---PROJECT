class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png");
      this.body = Bodies.rectangle(x, y, width,height, options);
      World.add(world, this.body);
    }
    display(){
      imageMode(CENTER);
      fill("pink");
      image(this.image,this.body.position.x,this.body.position.y, this.width, this.height);

      /*rectMode(CENTER);
      fill("pink");
      rect(this.body.position.x,this.body.position.y, this.width, this.height);

      rectMode(CENTER);
      fill("pink");
      rect(this.body.position.x,this.body.position.y , this.width, this.height);
  */
    }
  };
  