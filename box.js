class box{
    constructor (x,y,width,height,angle){
        var box_options={
            isStatic:true,
        restitution:0.2,
    friction:1,
    density:1
        }
        
    this.body=Bodies.rectangle(x,y,width,height,box_options);
    this.width=width;
    this.height=height;
    
    
    World.add(world,this.body);
    
    }
display(){

    var pos=this.body.position;
    var angle=this.body.angle;
    push ();
    translate(pos.x,pos.y);
    rotate(angle);
     
    
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green")
    fill(0,20,0);
    pop();
}
}