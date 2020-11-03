class Box{


constructor(x,y,width,height){

    var ball_options ={
        restitution: 1
    }

   this.body = Bodies.rectangle(x,y,width,height,(ball_options));
    World.add(world,this.body);

this.width=width
this.height=height



}
 display(){
var pos=this.body.position

var angle=this.body.angle
push()

translate(pos.x,pos.y)
rotate(angle)


rectMode(CENTER)
fill(200)
rect (0,0,this.width,this.height)
pop()

}
}