class launcher 
{
   constructor(a,pointB)
   {
       var options =  {
         bodyA : a ,
         pointB :pointB,
         stiffness : 0.08,
         length : 0.8,
       }
       this.pointB = pointB
       this.con5 = Con.create(options)
       World.add(world,this.con5)  
   }

   fly ()
   {
     this.con5.bodyA = null;
   }

   display()
   {
       if (this.con5.bodyA)
       {line(this.con5.bodyA.position.x,this.con5.bodyA.position.y,this.pointB.x,this.pointB.y)}
   }
}