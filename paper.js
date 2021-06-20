class paper {
   constructor( x,y ,radius){
       var options  = {
           isStatic : false,
           restitution : 0.3,
           friction:0.5,
           density:1.2,
       }
       this.body = Bodies.circle(x,y,radius,options)
       this.radius = radius
       this.image = loadImage("sprites/paper.png")       
        this.image.scale = 10000
       World.add(world,this.body)
   }
     display(){
         
         var pos = this.body.position;
         var angle  = this.body.angle;
         push()
         translate (pos.x,pos.y)
         rotate(angle);
            imageMode(RADIUS)
            fill ("red")
            image(this.image,0.5,200,this.radius,this.radius)
            pop ()
     }


};